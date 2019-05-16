import styled from "styled-components";

export const StyledForm = styled.form`
  color: white;
  font-size: 1.2rem;

  & input {
    border-radius: 5px;
    margin-right: 5px;
    width: 10vw;
  }
  & button {
    background-color: #6f7682;
    border-radius: 5px;
    border: none;
    color: #050607;
    padding: 7 7px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-right: 1vw;
  }
`;

export const StyledSignUpForm = styled(StyledForm)`
  margin-top: 30px;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 50vw;
  margin: auto;
  border-radius: 5px;
  border: transparent;
  background-color: #323c4d1d;
  & input {
    width: 20vw;
    height: 3vh;
    margin-bottom: 7px;
  }
`;
export const StyledSearchForm = styled(StyledSignUpForm)`
  margin-top: 30px;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 50vw;
  margin: 5vh auto;
  border-radius: 5px;
  background: none;
  border: transparent;
  & input {
    width: 20vw;
    height: 3vh;
    margin-bottom: 3vh;
  }
`;
