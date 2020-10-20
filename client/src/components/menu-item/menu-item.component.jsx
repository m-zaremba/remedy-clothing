import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MenuItemContainer,
  MenuItemTitle,
  MenuItemSubtitle,
  MenuItemContentContainer,
  BackgroundImage,
} from './menu-item.styles';

export const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      role="button"
      tabIndex={0}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      onKeyDown={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <MenuItemContentContainer>
        <MenuItemTitle>{title}</MenuItemTitle>
        <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
      </MenuItemContentContainer>
    </MenuItemContainer>
  );
};

MenuItem.defaultProps = {
  size: null,
  linkUrl: null,
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  linkUrl: PropTypes.string,
  match: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default withRouter(MenuItem);
