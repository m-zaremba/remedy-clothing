import React from 'react';
import PropTypes, { object } from 'prop-types';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, Title, Preview } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(object).isRequired,
};

export default CollectionPreview;
