import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "~/Assets/Icons/bottomtab/home";
import Group from "~/Assets/Icons/bottomtab/group";
import User from "~/Assets/Icons/bottomtab/user";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeNavigation from "../Stacks/HomeNavigation";
import GroupNavigation from "../Stacks/GroupNavigation";
import ProfileNavigation from "../Stacks/ProfileNavigation";
import Colors from "~/Assets/Colors";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "HomeWithoutBottomTab" ||
      routeName === "TakingQuizScreen" ||
      routeName === "QuizAnswer"
    ) {
      return "none";
    }
    return "flex";
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigation}
        options={({ route }) => ({
          tabBarStyle: { display: getTabBarVisibility(route) },
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <Home color={focused ? Colors.appBaseColor : Colors.gray} />
          ),
        })}
      />
      <Tab.Screen
        name="GroupStack"
        component={GroupNavigation}
        options={({ route }) => ({
          tabBarStyle: { display: getTabBarVisibility(route) },
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <Group color={focused ? Colors.appBaseColor : Colors.gray} />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigation}
        options={({ route }) => ({
          tabBarStyle: { display: getTabBarVisibility(route) },
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <User color={focused ? Colors.appBaseColor : Colors.gray} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export { BottomTabNavigator };
