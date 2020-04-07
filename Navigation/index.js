import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import CartIcon from "./CartIcon";

// Screens
import { SHOP, CART, USER } from "./screenNames";
import UserStack from "./UserStack";
import CartStack from "./CartStack";

const { Navigator, Screen } = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={CART}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "rgb(20,90,100)"
        }
      }}
    >
      <Screen
        name={USER}
        component={UserStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="account"
              type="MaterialCommunityIcons"
              style={{ color }}
            />
          )
        }}
      />
      <Screen
        name={CART}
        component={CartStack}
        options={{
          tabBarIcon: ({ color }) => <CartIcon color={color} />,
          title: "Cart"
        }}
      />
    </Navigator>
  );
}
