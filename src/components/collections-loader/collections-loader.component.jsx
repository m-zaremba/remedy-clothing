import React from "react";

import "./collections-loader.styles.scss";

const WithLoader = (WrappedComponent) => {
  const Loader = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="loader-overlay">
        <div className="loader-container">
          <div className="dummy-title" />
          <div className="items-wrapper">
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
          </div>
        </div>
        <div className="loader-container">
          <div className="dummy-title" />
          <div className="items-wrapper">
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
            <div className="item-placeholder-wrapper">
              <div className="item-placeholder" />
              <div className="item-footer">
                <div className="item-name-placeholder" />
                <div className="item-price-placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Loader;
};

export default WithLoader;
