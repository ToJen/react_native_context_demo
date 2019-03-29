import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import MainTabNavigator from "./MainTabNavigator";

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  { headerMode: "none" }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: MainTabNavigator
    },
    {
      initialRouteName: "Auth"
    }
  )
);
