import React, { Component } from "react";
import SignUpForm from "./SignupForm";

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
      </>
    );
  }
}

export default Landing;
