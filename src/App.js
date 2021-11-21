import React from "react";
import Store from "./Store";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./Screens/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CreateAccountScreen from "./Screens/CreateAccountScreen";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={Store}>
      <View style={Styles.appContainer}>
        <StatusBar hidden></StatusBar>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="CreateAccountScreen"
            screenOptions={{ gestureEnabled: false }}
            headerMode="none"
          >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen
              name="CreateAccountScreen"
              component={CreateAccountScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
