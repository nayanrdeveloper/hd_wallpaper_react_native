import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { AllCategory, YourCategory } from "../screens";

const Tab = createMaterialTopTabNavigator();

export default function CategoryTopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#064851",
        // indicatorStyle: { backgroundColor: "black" },
        // tabStyle: { borderWidth: 1, borderColor: "black" },
        activeTabStyle: { borderBottomWidth: 2, borderColor: "#064851" },
        labelStyle: { fontWeight: "bold" },
        activeLabelStyle: { color: "#064851" },
      }}
    >
      <Tab.Screen
        name="allCategory"
        component={AllCategory}
        options={{ title: "All Category" }}
      />
      <Tab.Screen
        name="yourCategory"
        component={YourCategory}
        options={{ title: "Your Category" }}
      />
    </Tab.Navigator>
  );
}
