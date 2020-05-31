import React, { useEffect, useContext, useState } from "react";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { CollectionsContext } from "../../providers/collections/collections.provider";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import WithLoader from "../../components/collections-loader/collections-loader.component";

const CollectionsOverviewWithLoader = WithLoader(CollectionsOverview);
const CollectionPageWithLoader = WithLoader(CollectionPage);

const ShopPage = ({ match }) => {
  const { setContextCollections } = useContext(CollectionsContext);
  const [fetchedCollections, setFetchedCollections] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("collections")
      .onSnapshot(async (snapshot) => {
        const convertedCollections = convertCollectionsSnapshotToMap(snapshot);
        setFetchedCollections(convertedCollections);
        setIsLoading(false);
      });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setContextCollections(fetchedCollections);
  }, [fetchedCollections, setContextCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithLoader isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithLoader isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
