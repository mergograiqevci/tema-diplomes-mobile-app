import React from "react";
import { View, Text, Image } from "react-native";
import Play from "~/Assets/Svg/play";
import Styles from "./styles";
import Colors from "~/Assets/Colors";
const TasksBox = ({ item }) => {
  const imgStat =
    "https://www.nicepng.com/png/detail/222-2224770_react-native-icon-png.png";
  return (
    <View style={[Styles.container, { backgroundColor: Colors.blue }]}>
      <Image
        source={{ uri: item.image ? item.image : imgStat }}
        style={Styles.imageView}
      />
      <View style={Styles.textView}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.description}>{item[item.type].description}</Text>
      </View>
      {item.type === "video" && (
        <View style={Styles.icon}>
          <Play />
        </View>
      )}
    </View>
  );
};

export default TasksBox;
