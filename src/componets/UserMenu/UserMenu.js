import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import s from './UserMenu.module.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="avatar" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <Button
      variant="contained"
      color="primary"
      type="button"
      className={s.button}
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mSTP = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-10.jpg',
});

const mDTP = {
  onLogout: authOperations.logOut,
};

export default connect(mSTP, mDTP)(UserMenu);
