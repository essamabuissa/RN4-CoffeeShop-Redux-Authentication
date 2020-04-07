import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { LOGIN, SIGNUP, PROFILE } from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function UserStack() {
  return (
    <Navigator initialRouteName={LOGIN} screenOptions={screenOptions}>
      <Screen name={LOGIN} component={Login} options={{ headerShown: false }} />
      <Screen
        name={SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen name={PROFILE} component={Profile} />
    </Navigator>
  );
}
