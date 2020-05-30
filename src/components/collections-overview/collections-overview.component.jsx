import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionsContext } from "../../providers/collections/collections.provider";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap.collections).map(
    (key) => collectionsMap.collections[key]
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
