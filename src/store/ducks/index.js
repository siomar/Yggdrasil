import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import login from "./login";

import storage from "redux-persist/lib/storage";

const persistRegister = {
  key: "storage-app",
  storage: storage
};

export default history =>
  combineReducers({
    login: persistReducer(persistRegister, login)
  });
