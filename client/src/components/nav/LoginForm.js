import React from "react";
import { StyledForm } from "../../elements/form";
import { StyledButton } from "../../elements/styledButton";

const LoginForm = props => {
  const credentials = {
    username: props.username,
    password: props.password
  };

  return (
    <StyledForm>
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
      <StyledButton onClick={e => props.login(e, credentials)}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
