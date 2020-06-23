import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'),
);
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path="/"
            render={(props) => (
              <ErrorBoundary>
                <HomePage {...props} />
              </ErrorBoundary>
            )}
          />

          <Route
            path="/shop"
            render={(props) => (
              <ErrorBoundary>
                <ShopPage {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            exact
            path="/signin"
            render={(props) => (
              <ErrorBoundary>
                {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage {...props} />}
              </ErrorBoundary>
            )}
          />
          <Route exact path="/checkout" component={Checkout} />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

App.defaultProps = {
  currentUser: null,
};

App.propTypes = {
  currentUser: PropTypes.shape({}),
  checkUserSession: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
