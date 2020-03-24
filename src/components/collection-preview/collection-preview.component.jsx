import React from 'react';
import './collection-preview.styles.scss';
import PropTypes, { object } from 'prop-types';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, name, imageUrl, price }) => (
            <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(object).isRequired,
};

export default CollectionPreview;
