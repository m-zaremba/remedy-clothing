import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionsContext } from "../../providers/collections/collections.provider";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const { collections } = useContext(CollectionsContext);
  const collectionsMap = Object.keys(collections).map(
    (key) => collections[key]
  );

  return (
    <div className="collections-overview">
      {collectionsMap.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
