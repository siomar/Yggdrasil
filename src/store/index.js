import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./ducks";
import rootSaga from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(
  createRootReducer(),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export default store;
