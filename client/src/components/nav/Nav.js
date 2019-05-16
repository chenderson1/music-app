import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { MainNav, StyledLink } from "../../elements/nav";
import { StyledButton } from "../../elements/styledButton";

export class Nav extends Component {
  render() {
    const { username, password } = this.props.loginForm;
    const { handleLoginChange, login } = this.props;
    return (
      <MainNav>
        <StyledLink to="/">
          <img src={require("../../resources/record.png")} alt="record" />
        </StyledLink>
        {this.props.token && (
          <>
            <StyledLink to="/search">
              <p>search</p>
            </StyledLink>

            <StyledLink to="/profile">
              <p>Profile</p>
            </StyledLink>
          </>
        )}

        {this.props.token ? (
          <StyledButton onClick={this.props.logout}>Logout</StyledButton>
        ) : (
          <LoginForm
            handleChange={handleLoginChange}
            username={username}
            password={password}
            login={login}
          />
        )}
      </MainNav>
    );
  }
}

export default Nav;
