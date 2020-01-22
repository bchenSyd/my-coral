import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./combinedReducers";

const middleware = [thunk];

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ //eslint-disable-line
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ //eslint-disable-line
        name: "my-coral"
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
}
