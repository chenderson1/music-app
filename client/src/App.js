import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { withUserData } from "./context/userDataProvider";
import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App(props) {
  return (
    <div className="app">
      <Nav {...props} />
      {!props.token && <Landing {...props} />}
      {props.token && (
        <Switch>
          <Route exact path={"/"} render={rProps => <Home {...rProps} />} />
          {/* 
        //route to home
          //popular tracks list /
          //popular albums list
          //click to detail
        //route to Profile
          // user favorite tracks and albums, user info
        //track detail track/:_id
          // click to add to favorites
        //album detail album/:_id
          //click  to add to favorites
        //search
          //search /search
          //click to detail
          //click to add
        */}
        </Switch>
      )}
      <Footer />
    </div>
  );
}

export default withUserData(App);
