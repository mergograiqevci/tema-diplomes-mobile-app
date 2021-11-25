import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "~/Screens/ProfileScreen";

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ gestureEnabled: false }}
      headerMode="none"
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
