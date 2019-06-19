import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "../pages/Home";
import About from "../pages/About";

const Logada = createBottomTabNavigator({
  Home,
  About
});

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home,
      Logada
    },
    {
      initialRouteName: "Home"
    }
  )
);

export default Routes;
