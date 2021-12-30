import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Colors from "~/Assets/Colors";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import ToDoActions from "~/Store/ToDo/Actions";
import State from "~/Store/State";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import isTodayDay from "~/Functions/isTodayDay";
import isProfessor from "~/Functions/isProfessor";
const OtherTasks = ({ item }) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state?.myProfile);
  const toDoReducer = useSelector((state) => state?.ToDo);
  const toDoData = toDoReducer?.toDoData;
  const unFormatedToDoData = toDoReducer?.unFormatedToDoData;
  const canCompleteQuizData = toDoReducer?.canCompleteQuizData;
  const canCompleteQuizError = toDoReducer?.canCompleteQuizError;
  const canCompleteQuizState = toDoReducer?.canCompleteQuizState;
  const getQuizResultError = toDoReducer?.getQuizResultData;
  const getQuizResultState = toDoReducer?.getQuizResultState;

  const navigation = useNavigation();
  const professor = isProfessor();
  const title =
    item?.isGroup === true
      ? item?.group?.title
        ? item?.group?.title
        : item?.title
      : item?.isTask === true
      ? item?.title
      : item?.quiz?.title;

  const subTitle =
    item?.isGroup === true
      ? item?.number_of_students
      : item?.isTask === true
      ? moment(item?.quiz?.date)
          .utc()
          .format(isTodayDay(item?.quiz?.date) ? "HH:mm" : "DD/MM-HH:mm")
      : item?.grade === null
      ? item?.points
      : "Nota: " + item?.grade;

  const bottomSubTitle =
    item?.isGroup === true
      ? "Students"
      : item?.isTask === true
      ? undefined
      : item?.grade === null
      ? "Pike"
      : undefined;

  const backgroundColor =
    item?.isGroup === true
      ? Colors.groupBackground
      : item?.isTask === true
      ? Colors.upComingTasks
      : item?.grade === null
      ? Colors.pendingQuiz
      : item?.grade.toString() === "5"
      ? Colors.negative
      : Colors.appBaseColor;

  useEffect(() => {
    if (canCompleteQuizState === State.FAILED) {
      setTimeout(() => {
        dispatch(ToDoActions.clearPrevCanCompleteQuiz());
      }, 500);
    }
    if (getQuizResultState === State.FAILED) {
      toasterMessage("Ndodhi nje gabim gjate leximit te pergjigjeve", "error");
    }
  }, [canCompleteQuizState, getQuizResultState]);

  const redirectToQuiz = () => {
    navigation.push("TakingQuizScreen", { item: item });
  };

  const redirectToAnswer = () => {
    navigation.push("QuizAnswer", { quizName: item?.quiz?.title });
  };

  const handleTaskOnClick = () => {
    if (item.isGroup === true) {
      const tasks = toDoData[0].data.filter((i) =>
        i.group && i.group._id.toString() === item?.group?._id.toString()
          ? item?.group?._id.toString()
          : item?._id.toString()
      );

      navigation.push("GroupDetailsScreen", {
        item: item,
        tasks: [{ title: "Detyrat", data: tasks }],
      });
    } else {
      if (item.grade === undefined) {
        dispatch(ToDoActions.canCompleteQuiz(item?._id, redirectToQuiz));
      } else if (parseInt(item.grade) >= 5) {
        dispatch(ToDoActions.getQuizResult(item?._id, redirectToAnswer));
      }
    }
  };
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={handleTaskOnClick}
      activeOpacity={item.isGroup === true ? 0.7 : professor ? 1 : 0.7}
      disabled={item.isTask === true ? (professor ? true : false) : false}
    >
      <Text style={Styles.title}>{title}</Text>
      <View style={Styles.subTextView}>
        <Text style={Styles.rightTitle}>
          {canCompleteQuizError?.message === "cant_complete_task" &&
          item.isTask === true &&
          item?._id === canCompleteQuizError?.quiz_id
            ? `Data e Provimit`
            : subTitle}
        </Text>
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
