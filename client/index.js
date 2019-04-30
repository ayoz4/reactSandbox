import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "../client/components/App";
import routes from "./routes";

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("app")
);
