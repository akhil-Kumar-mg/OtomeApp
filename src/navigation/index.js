import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import ShortCuts from "../screens/ShortCuts";
import Home from "../screens/Home";
import CreateShortCut from "../screens/CreateShortCut";

const navigator = createStackNavigator(
  {
    HOME: {
      screen: Home
    },
    SHORTCUTS: {
      screen: CreateShortCut
    }
  },
  {
    initialRouteName: "HOME"
  }
);

export default createAppContainer(navigator);
