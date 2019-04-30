import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from "./components/App";
import Greetings from "./components/Greetings";
import SignUp from "./components/signup/SignupPage";

export default (
  <Route path="/" component={App}>
    <Route component={Greetings} />
    <Route path="signup" component={SignUp} />
  </Route>
);
