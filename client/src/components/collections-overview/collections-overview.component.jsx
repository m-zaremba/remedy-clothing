import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, title, items, history, match, routeName }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
          history={history}
          match={match}
          routeName={routeName}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(CollectionsOverview);
