import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Home from "../pages/Home";
import About from "../pages/About";

const Logada = createBottomTabNavigator({
  AboutHome: {
    screen: About
  },
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
