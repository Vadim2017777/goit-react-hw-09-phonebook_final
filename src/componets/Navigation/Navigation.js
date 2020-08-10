/*
 * TODO: публичные и приватные линки
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.menu_navigation}>
    {routes.map(route => (
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
  </nav>
);

export default Navigation;
