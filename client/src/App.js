import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { withUserData } from "./context/userDataProvider";
import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import TrackDetail from "./components/detail/TrackDetail";
import AlbumDetail from "./components/detail/AlbumDetail";
import Search from "./components/search/Search";

function App(props) {
  return (
    <div className="app">
      <Nav {...props} />
      {!props.token && <Landing {...props} />}
      {props.token && (
        <Switch>
          <Route exact path={"/"} render={rProps => <Home {...rProps} />} />
          <Route
            path={"/track/:id"}
            render={rProps => <TrackDetail {...rProps} />}
          />
          <Route
            path={"/album/:id"}
            render={rProps => <AlbumDetail {...rProps} />}
          />
          <Route path={"/search"} render={rProps => <Search {...rProps} />} />
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
