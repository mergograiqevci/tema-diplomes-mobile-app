import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Styles from "./styles";
const StudentRatingScreen = ({ navigation }) => {
  const question = [
    { id: 1, left: "Which is greater than 5?", correct: true },
    { id: 2, left: "Which is greater than 5?", correct: true },
    { id: 3, left: "Which is greater than 5?", right: "5", correct: false },
    { id: 4, left: "Which is greater than 5?", correct: true },
    { id: 5, left: "Which is greater than 5?", right: "5", correct: false },
    { id: 6, left: "Which is greater than 5?", right: "3", correct: true },
    { id: 7, left: "Which is greater than 5?", right: "7", correct: false },
  ];
  const [grade, setGrade] = useState("");
  const renderItem = ({ item }) => {
    return (
      <QuizController
        item={item}
        textColor={Colors.white}
        backgroundColor={item.correct ? Colors.darkGreen : Colors.negative}
      />
    );
  };

  const flatListHeader = () => {
    return (
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>Pyetje</Text>
        <Text style={Styles.headerText}>{question.length}</Text>
      </View>
    );
  };
  const flatListFooter = () => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={Styles.footerText}>Total:4/5</Text>
        <View style={Styles.gradeView}>
          <TextInput
            placeholder="Nota"
            onChangeText={setGrade}
            keyboardType="numeric"
            style={Styles.inputStyle}
          />
          <TouchableOpacity style={Styles.buttonSaveView}>
            <Text style={Styles.buttonSaveViewText}>Ruaj</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Mergim Graiqevci"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        data={question}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={flatListHeader()}
        ListFooterComponent={flatListFooter()}
      />
    </View>
  );
};

export default StudentRatingScreen;
