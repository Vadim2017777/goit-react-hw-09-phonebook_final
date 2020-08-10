import React from 'react';
import { connect } from 'react-redux';

import { onChangeTheme } from '../../redux/Contact/contactActions';
import contactsSelectors from '../../redux/Contact/contactsSelectors';
import { authSelectors } from '../../redux/auth';

import styleConxt from '../../contex/ThemeContext';

import styles from './Header.module.css';

import Navigation from '../Navigation/Navigation';

import UserMenu from '../UserMenu/UserMenu';

const Header = ({ theme, toggleTheme, isAuthenticated }) => (
  <header
    style={{
      background: styleConxt[theme].headerBg,
      color: styleConxt[theme].fontColor,
    }}
  >
    <Navigation />
    {isAuthenticated && <UserMenu />}

    <div className={styles.theme_selector}>
      <span className={styles.label}>
        Toggle theme: {''}
        {theme}
      </span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={({ currentTarget }) => toggleTheme(currentTarget.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </header>
);

const mDTP = { toggleTheme: onChangeTheme };
const mSTP = state => ({
  theme: contactsSelectors.getTheme(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mSTP, mDTP)(Header);
