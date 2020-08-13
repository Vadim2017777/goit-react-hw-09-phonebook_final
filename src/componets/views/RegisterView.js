import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';

import s from './views.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.views_body}>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <label className={s.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <button type="submit" className={s.button}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView,
);