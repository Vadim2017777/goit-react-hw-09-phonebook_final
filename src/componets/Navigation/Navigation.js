import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import routes from '../routes';

import s from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav className={s.menu_navigation}>
    {routes.map(route => isAuthenticated ?(
      <NavLink
        exact={route.exact}
        key={route.label}
        to={route.path}
        className={s.menu_link}
        activeClassName={s.menu_ActiveLink}
      >
        {route.label}
      </NavLink>
    ))}
    {routes.map(route =>
                  route.private ? (
                    <PrivateRoute key={route.label} {...route} />
                  ) : (
                    <PublicRoute key={route.label} {...route} />
                  ),
                )}
  </nav>
);

const mSTP = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mSTP, null)(Navigation);
