import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Greetings from "./Greetings";
import SignupPage from "./signup/SignupPage";
import FlashMessageList from "./flash/FlashMessageList";
import LoginPage from "../components/login/LoginPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <FlashMessageList />
          <Route exact path="/" component={Greetings} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default hot(App);
