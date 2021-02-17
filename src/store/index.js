import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducers from './reducers'
const middlewares = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


export const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(...middlewares))
)