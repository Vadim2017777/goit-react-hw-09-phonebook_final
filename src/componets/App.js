import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';

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
                {routes.map(route => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Body>
        </BrowserRouter>
      </>
    );
  }
}

export default connect(null, { getUser: authOperations.getCurrentUser })(App);
