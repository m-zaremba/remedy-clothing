import shopActionTypes from './shop.types';
import {
  fetchCollectionsStart,
  fetchCollectionSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync,
} from './shop.actions';

describe('testing fetchCollectionStart action', () => {
  it('should run fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(shopActionTypes.FETCH_COLLECTIONS_START);
  });
});

describe('testing fetchCollectionSuccess action', () => {
  const mockCollectionMap = {
    mens: {
      id: 1,
    },
  };

  it('should run fetchCollectionSuccess action', () => {
    expect(fetchCollectionSuccess(mockCollectionMap).type).toEqual(
      shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    );
    expect(fetchCollectionSuccess(mockCollectionMap).payload).toEqual(mockCollectionMap);
  });
});

describe('testing fetchCollectionFailure action', () => {
  const mockErrorMessage = 'connection error';

  it('should run fetchCollectionsFailure action', () => {
    expect(fetchCollectionsFailure(mockErrorMessage).type).toEqual(
      shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    );
    expect(fetchCollectionsFailure(mockErrorMessage).payload).toEqual(mockErrorMessage);
  });
});

describe('testing fetchCollectionsStartAsync action', () => {
  it('should run the fetchCollectionsStartAsync action', () => {
    const mockDispatch = jest.fn();
    const mockDispatchCall = fetchCollectionsStartAsync();
    mockDispatchCall(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});
