import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { stopsReducer } from './stops/reducer';

const rootReducer = combineReducers({
  stops: stopsReducer,
});

const configureStore = () =>
  createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
