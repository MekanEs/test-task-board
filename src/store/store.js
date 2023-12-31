import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore
} from 'redux';
import rootReducer from './rootReducer';
import infoReducer from './infoReducer';

let RootReducersBag = combineReducers({
  root: rootReducer,
  info: infoReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(
  RootReducersBag,
  /* preloadedState, */ composeEnhancers(applyMiddleware())
);

window._store_ = store;

export default store;
