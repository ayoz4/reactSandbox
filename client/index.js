import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";

import store from "./store";
import App from "./components/App";
import setAuthorizationToken from "./utils/setAuthorizationToke";
import { setCurrentUser } from "./actions/authActions";

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
