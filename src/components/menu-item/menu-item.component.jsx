import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={size ? `menu-item ${size}` : 'menu-item'}>
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

export default MenuItem;
