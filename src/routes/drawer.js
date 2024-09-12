import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home";
import BotaoPanicoScreen from "../screens/botaoPanico";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="BotaoPanico"
        component={BotaoPanicoScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
