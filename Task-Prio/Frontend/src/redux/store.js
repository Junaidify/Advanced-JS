import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { fetchReducer, userReducer } from "../hooks/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  user: userReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
