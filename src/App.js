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
import HomeScreen from "./Screens/HomeScreen";
import GroupDetailsScreen from "./Screens/GroupDetailsScreen";
import TakingQuizScreen from "./Screens/TakingQuizScreen";
import QuizResultScreen from "./Screens/QuizResultScreen";
import QuizStudentResultScreen from "./Screens/QuizStudentResultScreen";
import NewTaskScreen from "./Screens/NewTaskScreen";
import QuizDetailsScreen from "./Screens/QuizDetailsScreen";
import StudentRatingScreen from "./Screens/StudentRatingScreen";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={Store}>
      <View style={Styles.appContainer}>
        <StatusBar hidden></StatusBar>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StudentRatingScreen"
            screenOptions={{ gestureEnabled: false }}
            headerMode="none"
          >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />

            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen
              name="CreateAccountScreen"
              component={CreateAccountScreen}
            />
            <Stack.Screen
              name="GroupDetailsScreen"
              component={GroupDetailsScreen}
            />
            <Stack.Screen
              name="TakingQuizScreen"
              component={TakingQuizScreen}
            />
            <Stack.Screen
              name="QuizResultScreen"
              component={QuizResultScreen}
            />
            <Stack.Screen
              name="QuizStudentResultScreen"
              component={QuizStudentResultScreen}
            />
            <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
            <Stack.Screen
              name="QuizDetailsScreen"
              component={QuizDetailsScreen}
            />
            <Stack.Screen
              name="StudentRatingScreen"
              component={StudentRatingScreen}
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
