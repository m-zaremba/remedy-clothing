import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={size ? `menu-item ${size}` : 'menu-item'}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      onKeyDown={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
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
