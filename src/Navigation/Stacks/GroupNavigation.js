import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GroupDetailsScreen from "~/Screens/GroupDetailsScreen";
import NewTaskScreen from "~/Screens/NewTaskScreen";
import QuizDetailsScreen from "~/Screens/QuizDetailsScreen";
import QuizResultScreen from "~/Screens/QuizResultScreen";
import StudentRatingScreen from "~/Screens/StudentRatingScreen";
import GroupsScreen from "~/Screens/GroupsScreen";
const Stack = createStackNavigator();

const GroupNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="GroupsScreen"
      screenOptions={{ gestureEnabled: false }}
      headerMode="none"
    >
      <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
      <Stack.Screen name="GroupDetailsScreen" component={GroupDetailsScreen} />
      <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
      <Stack.Screen name="QuizDetailsScreen" component={QuizDetailsScreen} />
      <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
      <Stack.Screen
        name="StudentRatingScreen"
        component={StudentRatingScreen}
      />
    </Stack.Navigator>
  );
};
export default GroupNavigation;
