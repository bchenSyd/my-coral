import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './combinedReducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers = (process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) //eslint-disable-line
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ //eslint-disable-line
    name: 'jo-math-class',
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
}
