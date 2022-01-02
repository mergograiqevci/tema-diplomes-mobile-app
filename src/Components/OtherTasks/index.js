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
import findGroupTasks from "~/Functions/array/findGroupTasks";
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
      ? item?.grade === "-1"
        ? Colors.quiz_not_taken
        : Colors.upComingTasks
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
    navigation.push("QuizAnswer", { item });
  };

  const handleTaskOnClick = () => {
    if (item.isGroup === true) {
      const tasks = findGroupTasks(
        toDoData,
        item?.group?._id ? item?.group?._id : item?._id
      );
      navigation.push("GroupDetailsScreen", {
        item,
        tasks,
      });
    } else {
      if (professor) {
        navigation.push("QuizStudentResultScreen", {
          item,
        });
      } else {
        if (item.grade === undefined) {
          redirectToQuiz();
          // dispatch(
          //   ToDoActions.canCompleteQuiz(
          //     item?._id,
          //     item?.group?._id,
          //     redirectToQuiz
          //   )
          // );
        } else if (parseInt(item.grade) >= 5) {
          dispatch(ToDoActions.getQuizResult(item?._id, redirectToAnswer));
        }
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
      activeOpacity={0.7}
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
