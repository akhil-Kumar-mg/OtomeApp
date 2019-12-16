import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CreateShortCut from "../screens/CreateShortCut";
import Home from "../screens/Home";
import ActionList from "../screens/ActionList";
import CreateArea from "../screens/CreateArea";

const navigator = createStackNavigator(
  {
    HOME: Home,
    ACTION_LIST: ActionList,
    CREATE_SHORTCUT: CreateShortCut,
    CREATE_AREA: CreateArea
  },
  {
    initialRouteName: "HOME",
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(navigator);
