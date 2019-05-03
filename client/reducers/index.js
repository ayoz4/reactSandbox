import { combineReducers } from "redux";

import flashMessages from "./flashMessages";
import auth from "./auth.js";

const rootReducer = combineReducers({ flashMessages, auth });

export default rootReducer;
