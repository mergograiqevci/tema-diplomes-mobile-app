import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
import Trophy from "~/Assets/Svg/trophy";
import { useSelector } from "react-redux";
const QuizResultScreen = ({ navigation, route }) => {
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  const { quizData } = route.params;

  const handleCloseButton = () => {
    navigation.push("HomeScreen");
  };

  const handleSeeStudentResults = () => {
    navigation.push("QuizStudentResultScreen");
  };

  return (
    <View style={[Styles.container, { paddingTop: safeAreaSize.top + 40 }]}>
      <Text style={Styles.resultText}>Rezultati</Text>
      <Trophy />
      <Text style={Styles.congratsText}>Urime!</Text>
      {/* <Text style={Styles.congratsDescriptionText}>
        The Mathematics Placement Exam (MPE) is a 90-minute.
      </Text> */}
      <Text style={Styles.yourPointsText}>Piket e tua</Text>
      <Text style={Styles.yourPointsValueText}>{quizData?.data?.points}</Text>

      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingBottom: safeAreaSize.bottom + 15,
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={handleSeeStudentResults}
        >
          <Text style={Styles.seeStudentResultsText}>
            Shiko rezultatet e studenteve
          </Text>
        </TouchableOpacity>
        <View style={Styles.buttonView}>
          <TouchableOpacity
            style={Styles.seeAnswerButton}
            onPress={handleSeeStudentResults}
          >
            <Text style={Styles.seeAnswerButtonText}>Shiko pergjigjet</Text>
          </TouchableOpacity>
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
