import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { withUserData } from "./context/userDataProvider";
import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";

function App(props) {
  return (
    <div className="app">
      <Nav {...props} />
      <Landing {...props} />
      <Switch>
        {/* 
        //route to home
          //popular tracks list
          //click to add to fav
        //route to Profile
          // user favorite tracks and albums, user info
        //track detail
          // click track to add to favorites
        //album detail
          //click tracl to add to favorites
        //search
          //search
          //click to detail
          //click to add
        */}
      </Switch>
      <Footer />
    </div>
  );
}

export default withUserData(App);
