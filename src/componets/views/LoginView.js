import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';

import s from './views.module.css';
import CssTextField from '../../helpers/constatsStyles';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.views_body}>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit} className={s.form}>
          <CssTextField
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            variant="outlined"
            label="Name"
            className={s.input}
          />

          <CssTextField
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            variant="outlined"
            label="Password"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
