import React, { Component } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

import "./config/ReactotronConfig";

import Routes from "./routes";
import { setNavigator } from "./service/navigation";

import { PersistGate } from "redux-persist/integration/react";

export default class App extends Component {
  render() {
    console.tron = "oi";
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes ref={setNavigator} />
        </PersistGate>
      </Provider>
    );
  }
}
