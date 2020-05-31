import React, { useEffect, useContext, useState } from "react";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { CollectionsContext } from "../../providers/collections/collections.provider";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  const { collections, setContextCollections } = useContext(CollectionsContext);
  const [fetchedCollections, setFetchedCollections] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("collections")
      .onSnapshot(async (snapshot) => {
        const convertedCollections = convertCollectionsSnapshotToMap(snapshot);
        setFetchedCollections(convertedCollections);
      });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setContextCollections(fetchedCollections);
  }, [fetchedCollections, setContextCollections]);

  return (
    collections && (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  );
};

export default ShopPage;
