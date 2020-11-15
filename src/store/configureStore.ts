import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connectRoutes } from 'redux-first-router'
import router, {routesMap} from './router/router.reducer';
import RootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./rootSaga";

const reduxDevTools =
// @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(preloadedState: any) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap)

  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({ router, location: reducer, ...RootReducer })
  const middlewares = applyMiddleware(middleware, sagaMiddleware);
  const enhancers = compose(enhancer, middlewares, reduxDevTools);
  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
