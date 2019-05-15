import React from "react";

const SignUpForm = props => {
  const user = {
    name: props.name,
    username: props.username,
    email: props.email,
    password: props.password
  };
  return (
    <form className="signup-form">
      <span>Sign Up: </span>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={props.name}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={props.email}
        onChange={props.handleChange}
      />
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
      <button onClick={e => props.signup(e, user)}>Submit</button>
    </form>
  );
};

export default SignUpForm;