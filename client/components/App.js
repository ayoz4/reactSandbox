import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Greetings from "./Greetings";
import SignupPage from "./signup/SignupPage";
import FlashMessageList from "./flash/FlashMessageList";
import LoginPage from "../components/login/LoginPage";
import NewEventPage from "../components/events/NewEventPage";
import requireAuth from "../utils/requireAuth";

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
          <Route path="/new-event" component={requireAuth(NewEventPage)} />
        </div>
      </Router>
    );
  }
}

export default hot(App);
