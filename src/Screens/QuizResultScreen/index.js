import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Styles from "./styles";
import Trophy from "~/Assets/Svg/trophy";
import { useSelector } from "react-redux";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
const QuizResultScreen = ({ navigation, route }) => {
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  // const { quizData } = route.params;
  const completedQuizStudentData = useSelector(
    (state) => state?.ToDo?.completedQuizStudentData
  );

  console.log("completedQuizStudentData", completedQuizStudentData);

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
        data={completedQuizStudentData}
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
