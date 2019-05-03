import axios from "axios";
import setAuthorizationToke from "../utils/setAuthorizationToke";
import jwt from "jsonwebtoken";
import { SET_CURRENT_USER } from "./types";
import store from "../store";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function login(data) {
  return axios.post("/api/auth", data).then(res => {
    const token = res.data.token;
    localStorage.setItem("jwtToken", token);
    setAuthorizationToke(token);
    store.dispatch(setCurrentUser(jwt.decode(token)));
  });
}
