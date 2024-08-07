import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { fetchData, localStorageReducer } from "./reducer";

export const rootReducer = combineReducers({
  fetch: fetchData,
  localStorage: localStorageReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
