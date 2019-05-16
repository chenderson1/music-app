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
import Profile from "./components/profile/Profile";

function App(props) {
  return (
    <div className="app">
      <Nav {...props} />
      <div style={{ height: "100%" }}>
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
            <Route
              path={"/profile"}
              render={rProps => <Profile {...rProps} />}
            />
          </Switch>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default withUserData(App);
