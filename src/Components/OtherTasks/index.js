import React, { useEffect, useState } from "react";
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
import YoutubeVideoModal from "../YoutubeVideoModal";
import CompletedIcon from "~/Assets/Svg/completed";
const OtherTasks = ({ item }) => {
  const [youtubeModalVisible, setYoutubeModalVisible] = useState(false);

  const dispatch = useDispatch();
  const toDoReducer = useSelector((state) => state?.ToDo);
  const toDoData = toDoReducer?.toDoData;
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
      : item?.task?.title;

  const subTitle =
    item?.isGroup === true
      ? item?.number_of_students
      : item?.isTask === true
      ? moment(item?.quiz?.date)
          .utc()
          .format(isTodayDay(item?.quiz?.date) ? "HH:mm" : "DD/MM-HH:mm")
      : item?.type === "quiz"
      ? item?.quiz?.grade === null
        ? item?.quiz?.points
        : "Nota: " + item?.quiz.grade
      : "show_completed_icon";

  const bottomSubTitle =
    item?.isGroup === true
      ? "Students"
      : item?.isTask === true
      ? undefined
      : item?.quiz?.grade === null
      ? item?.type === "quiz"
        ? "Pike"
        : undefined
      : undefined;

  const backgroundColor = item?.backgroundColor
    ? item?.backgroundColor
    : Colors.upComingTasks;

  useEffect(() => {
    if (
      canCompleteQuizState === State.FAILED ||
      canCompleteQuizState === State.DONE
    ) {
      setTimeout(() => {
        dispatch(ToDoActions.clearPrevCanCompleteQuiz());
      }, 500);
    }
  }, [canCompleteQuizState]);

  const redirectToQuiz = () => {
    navigation.push("TakingQuizScreen", { item: item });
  };

  const handleQuizAnswerResponse = (type) => {
    if (type === "error") {
      toasterMessage("Ndodhi një gabim gjatë leximit të përgjigjeve", "error");
    } else {
      navigation.navigate("QuizAnswer", { item });
    }
  };

  const handleTaskOnClick = () => {
    if (item.isGroup === true) {
      const tasks = findGroupTasks(
        toDoData,
        item?.group?._id ? item?.group?._id : item?._id
      );
      navigation.navigate("GroupDetailsScreen", {
        item,
        tasks,
      });
    } else {
      if (professor) {
        if (item?.type === "quiz") {
          navigation.navigate("QuizStudentResultScreen", {
            item,
          });
        }
      } else {
        if (item?.type === "quiz") {
          if (item?.quiz?.grade === undefined) {
            if (item?.grade !== "-0") {
              dispatch(
                ToDoActions.canCompleteQuiz(
                  item?._id,
                  item?.group?._id,
                  redirectToQuiz
                )
              );
            }
          } else if (parseInt(item?.quiz?.grade) >= 5) {
            dispatch(
              ToDoActions.getQuizResult(item?._id, handleQuizAnswerResponse)
            );
          }
        } else if (item?.type === "book") {
          navigation.navigate("ReadingBookScreen", { item });
        } else if (item?.type === "video") {
          setYoutubeModalVisible(true);
        }
      }
    }
  };
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {
          backgroundColor,
        },
      ]}
      onPress={handleTaskOnClick}
      activeOpacity={0.7}
      disabled={item?.grade === "-0"}
    >
      <Text style={Styles.title}>{title}</Text>
      <View style={Styles.subTextView}>
        {subTitle !== "show_completed_icon" ? (
          <Text style={Styles.rightTitle}>
            {canCompleteQuizError?.message === "cant_complete_task" &&
            item.isTask === true &&
            item?._id === canCompleteQuizError?.quiz_id
              ? `Data e Provimit`
              : subTitle}
          </Text>
        ) : (
          <CompletedIcon />
        )}
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
      {youtubeModalVisible && (
        <YoutubeVideoModal
          item={item}
          modalVisible={youtubeModalVisible}
          setModalVisible={setYoutubeModalVisible}
        />
      )}
    </TouchableOpacity>
  );
};

export default OtherTasks;
