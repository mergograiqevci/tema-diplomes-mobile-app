import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Colors from "~/Assets/Colors";
import moment from "moment";
import { useSelector } from "react-redux";
const OtherTasks = ({ item }) => {
  const toDoReducer = useSelector((state) => state?.ToDo);
  const unFormatedToDoData = toDoReducer?.unFormatedToDoData?.groupTasks;
  const navigation = useNavigation();
  const title =
    item.isGroup === true
      ? item.group.title
      : item.isTask === true
      ? item.title
      : item.quiz.title;

  const subTitle =
    item.isGroup === true
      ? "3"
      : item.isTask === true
      ? moment(item?.quiz?.date).utc().format("DD/MM-HH:mm")
      : item.grade === null
      ? item?.points
      : "Nota: " + item?.grade;

  const bottomSubTitle =
    item.isGroup === true
      ? "Students"
      : item.isTask === true
      ? undefined
      : item.grade === null
      ? "Pike"
      : undefined;

  const backgroundColor =
    item.isGroup === true
      ? Colors.groupBackground
      : item.isTask === true
      ? Colors.upComingTasks
      : item.grade === null
      ? Colors.pendingQuiz
      : item.grade.toString() === "5"
      ? Colors.negative
      : Colors.appBaseColor;

  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={() =>
        item.isGroup === true
          ? // const d=groupTasks.filter((i)=>i.group._id.toString()===id);

            navigation.push("GroupDetailsScreen", {
              item: item,
              tasks: [
                {
                  title: "Detyrat",
                  data: unFormatedToDoData.filter(
                    (i) => i.group._id.toString() === item.group._id
                  ),
                },
              ],
            })
          : navigation.push("TakingQuizScreen")
      }
      activeOpacity={item.isGroup === true ? 0 : 0.7}
    >
      <Text style={Styles.title}>{title}</Text>
      <View style={Styles.subTextView}>
        <Text style={Styles.rightTitle}>{subTitle}</Text>
        {bottomSubTitle !== undefined && (
          <View
            style={[
              Styles.line,
              {
                borderTopWidth: bottomSubTitle === undefined ? 1 : 0,
              },
            ]}
          >
            <Text style={Styles.subRightTitle}>{bottomSubTitle}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default OtherTasks;
