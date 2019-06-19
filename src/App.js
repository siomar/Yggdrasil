import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./config/ReactotronConfig";

import Routes from "./routes";

export default class App extends Component {
  render() {
    console.tron = "oi";
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
