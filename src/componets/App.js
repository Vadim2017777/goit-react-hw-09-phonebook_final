import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from './routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Header from './Header/Header';
import Body from './Body/Body';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />

          <Body>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                {routes.map(route =>
                  route.private ? (
                    <PrivateRoute key={route.label} {...route} />
                  ) : (
                    <PublicRoute key={route.label} {...route} />
                  ),
                )}
              </Switch>
            </Suspense>
          </Body>
        </BrowserRouter>
      </>
    );
  }
}

export default connect(null, { getUser: authOperations.getCurrentUser })(App);
