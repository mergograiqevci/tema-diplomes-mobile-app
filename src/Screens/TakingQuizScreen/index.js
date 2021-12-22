import React, { useState, useEffect } from "react";
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
import State from "~/Store/State";
import { useIsFocused } from "@react-navigation/native";
const TakingQuizScreen = ({ navigation, route }) => {
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const { item } = route.params;
  console.log("ITEM:", item);
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  const toDoReducer = useSelector((state) => state?.ToDo);

  const completeQuizState = toDoReducer?.completeQuizState;
  const completeQuizData = toDoReducer?.completeQuizData;
  const completeQuizError = toDoReducer?.completeQuizError;

  const [questionIndex, setQuestinIndex] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState([
    { answer: [], question: "" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const lastQuestion = questionIndex + 1 === item?.quiz?.details?.length;
  const modalProps = {
    title: "A jeni te sigurt qe deshironi te dilni nga kuizi ?",
    subTitle:
      " The Mathematics Placement Exam (MPE) is a 90-minute, 60-item multiple choice exam that tests skills and understandings from precalculus",
    leftButtonText: "Konfirmo",
    leftButtonColor: Colors.negative,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.appBaseColor,
  };

  useEffect(() => {
    if (completeQuizState === State.DONE) {
      navigation.push("QuizResultScreen", { quizData: completeQuizData });
    } else if (completeQuizState === State.FAILED) {
      console.log("duhet me qit naj error");
    }
  }, [completeQuizState]);

  useEffect(() => {
    if (!focused) {
      dispatch(ToDoActions.clearPrevQuizCompleted());
    }
  }, [focused]);

  const setSingleAnswer = (sItem) => {
    const currentQuestion = item?.quiz?.details[questionIndex]?.question;
    const findCurrentQuestion = currentAnswers.find(
      (i) => i.question === currentQuestion
    );
    if (findCurrentQuestion) {
      const findAnswer = currentAnswers[questionIndex].answer.find(
        (i) => i === sItem.answer
      );
      let cAnswers = [...currentAnswers];
      if (findAnswer) {
        let filteredAnswer = cAnswers[questionIndex].answer.filter(
          (i) => i.toString() !== sItem.answer.toString()
        );
        cAnswers[questionIndex].answer = filteredAnswer;
      } else {
        cAnswers[questionIndex].answer.push(sItem.answer);
      }
      setCurrentAnswers(cAnswers);
    } else {
      if (questionIndex === 0) {
        setCurrentAnswers([
          { answer: [sItem.answer], question: currentQuestion },
        ]);
      } else {
        setCurrentAnswers([
          ...currentAnswers,
          { answer: [sItem.answer], question: currentQuestion },
        ]);
      }
    }
  };

  const switchToMap = (cItem, index) => {
    if (index === questionIndex) {
      return <QuizCurrentAnswer />;
    }
    if (index < questionIndex) {
      return <QuizAnswers color={Colors.blue} />;
    } else {
      return <QuizAnswers color={Colors.white} />;
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
          currentAnswers[questionIndex]?.answer?.find(
            (i) => i.toString() === convertedItem?.answer.toString()
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
              /{item?.quiz?.details?.length}
            </Text>
          </Text>
        </View>

        <View style={Styles.questionView}>
          {item?.quiz?.details.map((item, index) => (
            <View style={{ marginHorizontal: 2 }}>
              {switchToMap(item, index)}
            </View>
          ))}
        </View>
        <Text style={Styles.questionText}>
          {item?.quiz?.details[questionIndex]?.question}
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
      dispatch(ToDoActions.completeQuiz(item._id, currentAnswers));
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
        data={item?.quiz?.details[questionIndex]?.options}
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
