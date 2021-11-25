import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const OtherTasks = ({ item }) => {
  const navigation = useNavigation();
  const subTitle =
    item.type === "group" ? item.numbers.split(" ") : item.points.split("/");
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {
          backgroundColor: item.backgroundColor,
        },
      ]}
      onPress={() =>
        item.type === "group"
          ? navigation.push("GroupDetailsScreen")
          : item.type === "quiz" && navigation.push("TakingQuizScreen")
      }
      activeOpacity={item.type === "group" ? 0 : 0.7}
    >
      <Text style={Styles.title}>{item.title}</Text>
      <View style={Styles.subTextView}>
        <Text style={Styles.rightTitle}>{subTitle[0]}</Text>
        <View
          style={[
            Styles.line,
            {
              borderTopWidth: item.type === "quiz" ? 1 : 0,
            },
          ]}
        >
          <Text style={Styles.subRightTitle}>{subTitle[1]}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OtherTasks;
