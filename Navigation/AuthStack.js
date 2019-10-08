import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import List from "../Components/CoffeeList";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile,
    CoffeeList: List
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthStack;
