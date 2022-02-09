import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import todoReducer from "./todoDuck.js";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const middlewares = [];

const enhancers = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default function generateStore() {
  // it needs a reducer and an action
  const store = createStore(rootReducer, composedEnhancers);
  return store;
}
