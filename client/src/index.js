import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserDataProvider from "./context/userDataProvider";
import MusicDataProvider from "./context/musicDataProvider";

ReactDOM.render(
  <BrowserRouter>
    <UserDataProvider>
      <MusicDataProvider>
        <App />
      </MusicDataProvider>
    </UserDataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
