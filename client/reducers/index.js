import { combineReducers } from "redux";

import flashMessages from "./flashMessages";
import auth from "./auth";
import goods from "./goods";

const rootReducer = combineReducers({ flashMessages, auth, goods });

export default rootReducer;
