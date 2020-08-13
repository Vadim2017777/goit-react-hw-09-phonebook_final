import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import s from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav className={s.menu_navigation}>
    <NavLink
      to="/goit-react-hw-09-phonebook_final/"
      exact
      className={s.menu_link}
      activeClassName={s.menu_ActiveLink}
    >
      Home
    </NavLink>

    {isAuthenticated ? (
      <NavLink
        to="/phonebook"
        exact
        className={s.menu_link}
        activeClassName={s.menu_ActiveLink}
      >
        Phonebook
      </NavLink>
    ) : (
      <>
        {' '}
        <NavLink
          to="/register"
          exact
          className={s.menu_link}
          activeClassName={s.menu_ActiveLink}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={s.menu_link}
          activeClassName={s.menu_ActiveLink}
        >
          Login
        </NavLink>
      </>
    )}
  </nav>
);

const mSTP = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mSTP, null)(Navigation);
