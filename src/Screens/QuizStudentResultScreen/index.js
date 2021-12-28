import React, { useEffect } from "react";
import { View, Text, SectionList } from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import { useSelector, useDispatch } from "react-redux";
import TaskActions from "~/Store/Task/Actions";
import Styles from "./styles";
import formatQuizStyle from "~/Functions/array/formatQuizStyle";
import SectionHeader from "~/Components/SectionHeader";
const QuizStudentResultScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const taskReducer = useSelector((state) => state?.Task);
  const quizStudentsResultData = taskReducer?.quizStudentsResultData;
  const quizStudentsResultError = taskReducer?.quizStudentsResultError;
  const quizStudentsResultState = taskReducer?.quizStudentsResultState;

  useEffect(() => {
    dispatch(TaskActions.findStudentsByTask("61cb6c793688c7f1d1c8a76e"));
  }, []);

  const renderItem = ({ item }) => {
    const convertedItem = {
      left: item?.student?.username,
      right: item?.points,
    };
    return (
      <QuizController
        item={convertedItem}
        textColor={Colors.white}
        backgroundColor={Colors.green}
        onPress={() =>
          navigation.push("StudentRatingScreen", {
            styledQuestion: formatQuizStyle(
              JSON.parse(JSON.stringify(item?.completed_result)),
              true
            ),
            fullItem: item,
          })
        }
      />
    );
  };

  const studentsLength = () => {
    return (
      <Text style={Styles.headerText}>
        {quizStudentsResultData?.totalStudents}
      </Text>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Studentet"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        rightIcon={studentsLength()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <SectionList
        sections={quizStudentsResultData?.d}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
    </View>
  );
};

export default QuizStudentResultScreen;
