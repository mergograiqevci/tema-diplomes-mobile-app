import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "~/Screens/ProfileScreen";
import CreateAccountScreen from "~/Screens/CreateAccountScreen";

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ gestureEnabled: false }}
      headerMode="none"
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
