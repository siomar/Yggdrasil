import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./ducks";
import rootSaga from "./sagas";

import { persistStore } from "redux-persist";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(
  createRootReducer(),
  compose(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
