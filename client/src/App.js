import React from "react";
import "./App.css";
import { withUserData } from "./context/userDataProvider";

function App() {
  return <>Hello World</>;
}

export default withUserData(App);
