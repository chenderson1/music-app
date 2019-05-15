import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export class Nav extends Component {
  render() {
    const { username, password } = this.props.loginForm;
    const { handleLoginChange, login } = this.props;
    return (
      <div className="nav">
        <Link to="/">
          <h2>LOGO</h2>
        </Link>
        <Link to="/search">
          <p>search</p>
        </Link>

        {this.props.token ? (
          <button onClick={this.props.logout}>Logout</button>
        ) : (
          <LoginForm
            handleChange={handleLoginChange}
            username={username}
            password={password}
            login={login}
          />
        )}
      </div>
    );
  }
}

export default Nav;
