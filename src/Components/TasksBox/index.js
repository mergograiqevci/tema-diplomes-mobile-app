import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Play from "~/Assets/Svg/play";
import Styles from "./styles";
import Colors from "~/Assets/Colors";
import { useNavigation } from "@react-navigation/native";
const TasksBox = ({ item }) => {
  const navigation = useNavigation();
  const imgStat =
    "https://www.nicepng.com/png/detail/222-2224770_react-native-icon-png.png";
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {
          backgroundColor:
            item.type === "book" ? Colors.blue : Colors.appBaseColor,
        },
      ]}
      onPress={() =>
        navigation.navigate(
          item.type === "book" ? "ReadingBookScreen" : "VideoWebViewScreen",
          { item: item }
        )
      }
    >
      <Image
        source={{
          uri: item[item?.type]?.image ? item[item?.type]?.image : imgStat,
        }}
        style={Styles.imageView}
      />
      <View style={Styles.textView}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.description} numberOfLines={2}>
          {item[item.type].description}
        </Text>
      </View>
      {item.type === "video" && (
        <View style={Styles.icon}>
          <Play />
        </View>
      )}
      {item.type === "book" && (
        <View style={Styles.readBookView}>
          <View style={Styles.bgText}>
            <Text style={Styles.readBookText}>Lexoje</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TasksBox;
