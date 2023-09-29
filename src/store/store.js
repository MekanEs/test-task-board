import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore
} from 'redux';
import rootReducer from './rootReducer';

let RootReducersBag = combineReducers({
  root: rootReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducersBag,
  /* preloadedState, */ composeEnhancers(applyMiddleware())
);

window._store_ = store;

export default store;
