import React from "react";
import { View, Text, Image } from "react-native";
import Play from "~/Assets/Svg/play";
import Styles from "./styles";
const TasksBox = ({ item }) => {
  return (
    <View style={[Styles.container, { backgroundColor: item.backgroundColor }]}>
      <Image source={{ uri: item.image }} style={Styles.imageView} />
      <View style={Styles.textView}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.description}>{item.description}</Text>
      </View>
      <View style={Styles.icon}>
        <Play />
      </View>
    </View>
  );
};

export default TasksBox;
