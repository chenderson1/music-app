import React, { Component } from "react";
import axios from "axios";

export const { Provider, Consumer } = React.createContext();

//set state to userObj and token from current user session or initialize
export class UserDataProvider extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    signupForm: {
      name: "",
      username: "",
      password: "",
      email: ""
    },
    loginForm: {
      username: "",
      password: ""
    }
  };
  //post new user and set userObj and token to local storage for user tracking even after page refresh
  //also set userObj and token to state
  signup = async (e, userInfo) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", userInfo);
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({ user, token });
    } catch (err) {
      console.log(err);
    }
  };

  login = async (e, credentials) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", credentials);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({ user, token });
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  //clear out user info from local storage and initialize state
  logout = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.setState({
        user: {},
        token: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  //==============signup form handlchange
  handleSignUpChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        signupForm: {
          ...prevState.signupForm,
          [name]: value
        }
      };
    });
  };
  handleLoginChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [name]: value
        }
      };
    });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          handleSignUpChange: this.handleSignUpChange,
          handleLoginChange: this.handleLoginChange
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default UserDataProvider;

export const withUserData = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
