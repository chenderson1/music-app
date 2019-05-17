import React, { Component } from "react";
import SignUpForm from "./SignupForm";
import Welcome from "./Welcome";

export class Landing extends Component {
  render() {
    const { username, name, password, email } = this.props.signupForm;
    return (
      <>
        <SignUpForm
          signup={this.props.signup}
          handleChange={this.props.handleSignUpChange}
          username={username}
          name={name}
          password={password}
          email={email}
        />
        <Welcome />
      </>
    );
  }
}

export default Landing;
