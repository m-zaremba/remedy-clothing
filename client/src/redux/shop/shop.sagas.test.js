import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionsFailure } from './shop.actions';
import shopActionTypes from './shop.types';
import { fetchCollectionsAsync, fetchCollectionsStart } from './shop.sagas';

describe('testing fetch collections start saga', () => {
  it('should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = fetchCollectionsStart();
    expect(generator.next().value).toEqual(
      takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync),
    );
  });
});

describe('testing fetch collections async saga', () => {
  const generator = fetchCollectionsAsync();

  it('should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga ', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotToMap, mockSnapshot),
    );
  });

  it('should fire fetchCollectionsSuccess if collectionsMap is successful', () => {
    const mockCollectionsMap = {
      mens: { id: 1 },
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(fetchCollectionSuccess(mockCollectionsMap)),
    );
  });

  it('should fire fetchCollectionsFailure if get collection fails', () => {
    const newGenerator = fetchCollectionsAsync();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchCollectionsFailure('error')),
    );
  });
});
