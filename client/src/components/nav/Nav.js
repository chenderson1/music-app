import React, { Component } from "react";
import LoginForm from "./LoginForm";

export class Nav extends Component {
  render() {
    const { username, password } = this.props.loginForm;
    const { handleLoginChange, login } = this.props;
    return (
      <div className="nav">
        <h2>logo</h2>
        <LoginForm
          handleChange={handleLoginChange}
          username={username}
          password={password}
          login={login}
        />
      </div>
    );
  }
}

export default Nav;
