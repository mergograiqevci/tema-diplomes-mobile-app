import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Styles from "./styles";
import Trophy from "~/Assets/Svg/trophy";
import { useSelector, useDispatch } from "react-redux";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import ToDoActions from "~/Store/ToDo/Actions";
import { useIsFocused } from "@react-navigation/native";
import State from "~/Store/State";
import * as ToDoReducers from "~/Store/ToDo/Reducers";

const QuizResultScreen = ({ navigation, route }) => {
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  const { quizData } = route.params;
  const toDoReducer = useSelector((state) => state?.ToDo);
  const completedQuizStudentData = toDoReducer?.completedQuizStudentData;
  const quizResultData = toDoReducer?.getQuizResultData;
  const getQuizResultState = toDoReducer?.getQuizResultState;
  const [allStudents, setAllStudents] = useState(completedQuizStudentData);

  useEffect(() => {
    if (getQuizResultState === State.DONE) {
      let allSResults = allStudents;
      if (quizResultData.length > 0) {
        quizResultData.map((s) => allSResults.push(s));
      }
      setAllStudents(allSResults);
    }
  }, [getQuizResultState]);

  console.log("quizResultData", quizResultData);
  useEffect(() => {
    if (focused) {
      dispatch(ToDoActions.getQuizResult(quizData?.data?.quiz));
    } else {
      dispatch(ToDoReducers.clearPrevCompletedQuizStudentResult());
    }
  }, [focused]);

  const handleCloseButton = () => {
    navigation.push("HomeScreen");
  };

  const handleSeeStudentResults = () => {
    navigation.push("QuizStudentResultScreen");
  };

  const renderItem = ({ item }) => {
    const convertedItem = {
      left: "ID:" + item?.quiz?.student,
      right: "Piket:" + item?.quiz?.points,
    };
    return (
      <QuizController
        item={convertedItem}
        textColor={Colors.white}
        backgroundColor={Colors.green}
      />
    );
  };

  return (
    <View style={[Styles.container, { paddingTop: safeAreaSize.top + 40 }]}>
      <Text style={Styles.resultText}>Rezultati</Text>
      <Trophy />
      <View style={Styles.pointContainer}>
        <Text style={Styles.yourPointsText}>Piket:</Text>
        <Text style={Styles.yourPointsValueText}>10</Text>
        <Text style={Styles.seeStudentResultsText}>
          Rezultatet e studenteve te tjere
        </Text>
      </View>

      <FlatList
        data={allStudents}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View
        style={[
          Styles.bottomContainer,
          {
            paddingBottom: safeAreaSize.bottom + 40,
          },
        ]}
      >
        <View style={Styles.buttonView}>
          <TouchableOpacity
            style={Styles.endButton}
            onPress={handleCloseButton}
          >
            <Text style={Styles.endButtonText}>Mbyll</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuizResultScreen;
