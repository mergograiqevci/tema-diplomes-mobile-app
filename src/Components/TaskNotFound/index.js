import React from "react";
import { View, Text } from "react-native";
import TaskFound from "~/Assets/Svg/taskNotFound";
import Styles from "./styles";
const TaskNotFound = ({ message }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.taskImg}>
        <TaskFound />
        <Text style={Styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default TaskNotFound;
