import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccountScreen from "~/Screens/CreateAccountScreen";
import GroupDetailsScreen from "~/Screens/GroupDetailsScreen";
import HomeScreen from "~/Screens/HomeScreen";
import NewTaskScreen from "~/Screens/NewTaskScreen";
import ProfileScreen from "~/Screens/ProfileScreen";
import QuizDetailsScreen from "~/Screens/QuizDetailsScreen";
import QuizResultScreen from "~/Screens/QuizResultScreen";
import QuizStudentResultScreen from "~/Screens/QuizStudentResultScreen";
import StudentRatingScreen from "~/Screens/StudentRatingScreen";
import TakingQuizScreen from "~/Screens/TakingQuizScreen";
import ReadingBookScreen from "~/Screens/ReadingBookScreen";
import VideoWebViewScreen from "~/Screens/VideoWebViewScreen";
import QuizAnswer from "~/Screens/QuizAnswer";
const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ gestureEnabled: false }}
      headerMode="none"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
      <Stack.Screen name="GroupDetailsScreen" component={GroupDetailsScreen} />
      <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="QuizDetailsScreen" component={QuizDetailsScreen} />
      <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
      <Stack.Screen
        name="QuizStudentResultScreen"
        component={QuizStudentResultScreen}
      />
      <Stack.Screen
        name="StudentRatingScreen"
        component={StudentRatingScreen}
      />
      <Stack.Screen name="TakingQuizScreen" component={TakingQuizScreen} />
      <Stack.Screen name="ReadingBookScreen" component={ReadingBookScreen} />
      <Stack.Screen name="VideoWebViewScreen" component={VideoWebViewScreen} />
      <Stack.Screen name="QuizAnswer" component={QuizAnswer} />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
