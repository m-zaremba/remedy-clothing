import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import PropTypes from 'prop-types';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../card-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        <span className="logo">REMEDY</span>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            role="button"
            onClick={() => auth.signOut()}
            onKeyDown={() => auth.signOut()}
            tabIndex={0}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

Header.defaultProps = {
  currentUser: null,
};

Header.propTypes = {
  hidden: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({}),
};

export default connect(mapStateToProps)(Header);