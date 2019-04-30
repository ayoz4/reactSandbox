import React from "react";
import { render } from "react-dom";
import { browserHistory } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from "./routes";
import store from "./store";
import App from "./components/App";
import Greetings from "./components/Greetings";
import SignupPage from "./components/signup/SignupPage";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
