import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}
