import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import { useSelector, useDispatch } from "react-redux";
import TaskActions from "~/Store/Task/Actions";
import Styles from "./styles";
import formatQuizStyle from "~/Functions/array/formatQuizStyle";
const QuizStudentResultScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const taskReducer = useSelector((state) => state?.Task);
  const quizStudentsResultData = taskReducer?.quizStudentsResultData;
  const quizStudentsResultError = taskReducer?.quizStudentsResultError;
  const quizStudentsResultState = taskReducer?.quizStudentsResultState;

  useEffect(() => {
    dispatch(TaskActions.findStudentsByTask("61c756c4c764377c80a946c2"));
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
            styledQuestion: formatQuizStyle([item], true),
            fullItem: item,
          })
        }
      />
    );
  };

  const flatListHeader = () => {
    return (
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>Student</Text>
        <Text style={Styles.headerText}>{quizStudentsResultData?.length}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Studentet"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        style={{ marginTop: 20 }}
        data={quizStudentsResultData}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={flatListHeader()}
      />
    </View>
  );
};

export default QuizStudentResultScreen;
