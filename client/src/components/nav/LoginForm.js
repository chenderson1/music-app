import React from "react";

const LoginForm = props => {
  const credentials = {
    username: props.username,
    password: props.password
  };
  return (
    <form className="login-form">
      <span>Login: </span>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={props.username}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={props.password}
        onChange={props.handleChange}
      />
      <button onClick={e => props.login(e, credentials)}>Submit</button>
    </form>
  );
};

export default LoginForm;
