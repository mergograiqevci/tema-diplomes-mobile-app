import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import QuizAnswers from "~/Assets/Svg/quizAnswers";
import QuizCurrentAnswer from "~/Assets/Svg/quizCurrentAnswer";
import Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Logout from "~/Assets/Svg/logout";
import PopUpModal from "~/Components/PopUpModal";
import ToDoActions from "~/Store/ToDo/Actions";
const TakingQuizScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { item } = route.params;
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  const [questionIndex, setQuestinIndex] = useState(0);
  const [currentQuestion] = useState(item?.quiz?.quiz?.details[questionIndex]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log("quiz", quiz.quiz.details);
  const lastQuestion = questionIndex + 1 === item?.quiz?.quiz?.details?.length;
  console.log("ID:", item._id);
  const modalProps = {
    title: "A jeni te sigurt qe deshironi te dilni nga kuizi ?",
    subTitle:
      " The Mathematics Placement Exam (MPE) is a 90-minute, 60-item multiple choice exam that tests skills and understandings from precalculus",
    leftButtonText: "Konfirmo",
    leftButtonColor: Colors.negative,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.appBaseColor,
  };

  const question = [
    { id: 1, left: "a)", center: "2" },
    { id: 2, left: "b)", center: "3" },
    { id: 3, left: "c)", center: "8" },
    { id: 4, left: "d)", center: "11" },
  ];

  console.log("ANSWEER:", currentAnswers);

  const setSingleAnswer = (item) => {
    const findItem = currentAnswers.find(
      (i) => i.answer.toString() === item.answer.toString()
    );
    if (findItem) {
      setCurrentAnswers(
        currentAnswers.filter(
          (i) => i.answer.toString() !== item.answer.toString()
        )
      );
    } else {
      setCurrentAnswers([
        ...currentAnswers,
        { ...item, question: currentQuestion?.question },
      ]);
    }
  };

  const switchToMap = (cItem) => {
    // console.log("ITEM:", item);
    return <QuizAnswers color={Colors.white} />;
    //duhet me kqyr prap
    const itemIndex = item?.quiz?.quiz?.details.findIndex(
      (i) => i._id === cItem._id
    );
    console.log("INDEXI:", itemIndex);
    if (cItem.id === questionIndex) {
      return <QuizCurrentAnswer />;
    }
    if (cItem.id < questionIndex) {
      return <QuizAnswers color={Colors.blue} />;
    } else {
    }
  };

  const renderItem = ({ item, index }) => {
    const convertedItem = {
      answer: item,
      left: index + 1 + " )",
      center: item,
    };
    return (
      <QuizController
        item={convertedItem}
        textColor={Colors.black}
        backgroundColor={
          currentAnswers.find(
            (i) => i?.answer?.toString() === convertedItem?.answer?.toString()
          )
            ? Colors.green
            : Colors.white
        }
        onPress={setSingleAnswer}
      />
    );
  };

  const flatListHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={Styles.headerView}>
          <Text style={Styles.text}>{item?.quiz?.title}</Text>
          <Text style={Styles.text}>
            {questionIndex + 1}
            <Text style={[Styles.text, { opacity: 0.6 }]}>
              /{item?.quiz?.quiz?.details?.length}
            </Text>
          </Text>
        </View>

        <View style={Styles.questionView}>
          {item?.quiz?.quiz?.details.map((item) => (
            <View style={{ marginHorizontal: 2 }}>{switchToMap(item)}</View>
          ))}
        </View>
        <Text style={Styles.questionText}>
          {item?.quiz?.quiz?.details[questionIndex]?.question}
        </Text>
      </View>
    );
  };

  const footer = () => {
    return (
      <View style={[Styles.footerView, { bottom: safeAreaSize.bottom + 30 }]}>
        <View style={Styles.buttonView}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={handleLeaveQuiz}
          >
            <Logout />
            <Text style={Styles.logoutFromQuizText}>Dil nga Kuizi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.continueQuizButton}
            onPress={handleContinueToNextQuestion}
          >
            <Text style={Styles.continueQuizText}>
              {lastQuestion ? "Perfundo" : "Vazhdo"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleContinueToNextQuestion = () => {
    if (lastQuestion) {
      dispatch(ToDoActions.completeQuiz(item._id));
    } else {
      setQuestinIndex(questionIndex + 1);
    }
  };
  const handleLeaveQuiz = () => {
    setModalVisible(true);
  };

  const handleModalLeftButton = () => {
    setModalVisible(false);
    navigation.pop();
  };

  const handleModalRightButton = () => {
    setModalVisible(false);
  };

  return (
    <View style={[Styles.container, { paddingTop: safeAreaSize.top + 20 }]}>
      <FlatList
        data={item?.quiz?.quiz?.details[questionIndex]?.options}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={flatListHeader()}
      />
      {footer()}
      <PopUpModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        leftButtonAction={handleModalLeftButton}
        rightButtonAction={handleModalRightButton}
        otherProps={modalProps}
      />
    </View>
  );
};

export default TakingQuizScreen;
