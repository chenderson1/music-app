import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserDataProvider from "./context/userDataProvider";

ReactDOM.render(
  <UserDataProvider>
    <App />
  </UserDataProvider>,
  document.getElementById("root")
);
