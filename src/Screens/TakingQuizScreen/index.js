import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import QuizAnswers from "~/Assets/Svg/quizAnswers";
import QuizCurrentAnswer from "~/Assets/Svg/quizCurrentAnswer";
import Styles from "./styles";
import { useSelector } from "react-redux";
import Logout from "~/Assets/Svg/logout";
import PopUpModal from "~/Components/PopUpModal";
const TakingQuizScreen = ({ navigation }) => {
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  const [allAnswers, setAllAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
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

  const setSingleAnswer = (item) => {
    const findItem = currentAnswers.find((i) => i.id === item.id);
    if (findItem) {
      setCurrentAnswers(currentAnswers.filter((i) => i.id !== item.id));
    } else {
      setCurrentAnswers([...currentAnswers, item]);
    }
  };

  const switchToMap = (item) => {
    if (item.id === 2) {
      return <QuizCurrentAnswer />;
    }
    if (item.id < 2) {
      return <QuizAnswers color={Colors.blue} />;
    } else {
      return <QuizAnswers color={Colors.white} />;
    }
  };

  const renderItem = ({ item }) => {
    return (
      <QuizController
        item={item}
        textColor={Colors.black}
        backgroundColor={
          currentAnswers.find((i) => i.id === item.id)
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
          <Text style={Styles.text}>Test nga Matematika</Text>
          <Text style={Styles.text}>
            02
            <Text style={[Styles.text, { opacity: 0.6 }]}>/5</Text>
          </Text>
        </View>

        <View style={Styles.questionView}>
          {question.map((item) => (
            <View style={{ marginHorizontal: 2 }}>{switchToMap(item)}</View>
          ))}
        </View>
        <Text style={Styles.questionText}>
          Cili numer eshte me i madh se 4?
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
            <Text style={Styles.continueQuizText}>Vazhdo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleContinueToNextQuestion = () => {
    // console.log("NEXT QUESTION");
    navigation.push("QuizResultScreen");
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
        data={question}
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
