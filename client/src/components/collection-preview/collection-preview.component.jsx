import React from 'react';
import PropTypes, { object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, Title, Preview } from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <Title
        onClick={() => history.push(`${match.path}/${routeName}`)}
        onKeyDown={() => history.push(`${match.path}/${routeName}`)}
        role="button"
        tabIndex={0}
      >
        {title.toUpperCase()}
      </Title>
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

CollectionPreview.defaultProps = {
  routeName: undefined,
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(object).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object,
  }).isRequired,
  history: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.func]),
  ).isRequired,
  routeName: PropTypes.string,
};

export default withRouter(CollectionPreview);
