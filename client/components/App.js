import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Greetings from "./Greetings";
import SignupPage from "./signup/SignupPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Greetings} />
          <Route path="/signup" component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default hot(App);
