import React from "react";
import { View, Text, FlatList } from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Styles from "./styles";
const QuizDetailsScreen = ({ navigation }) => {
  const students = [
    { id: 1, left: "Mergim Graiqevci 1", right: "18/20", completed: true },
    { id: 2, left: "Mergim Graiqevci 2", right: "14/20", completed: true },
    { id: 3, left: "Mergim Graiqevci 3", right: "3/20", completed: false },
    { id: 4, left: "Mergim Graiqevci 4", right: "20/20", completed: true },
  ];
  const renderItem = ({ item }) => {
    return (
      <QuizController
        item={item}
        textColor={Colors.white}
        backgroundColor={item.completed ? Colors.darkGreen : Colors.negative}
      />
    );
  };

  const flatListHeader = () => {
    return (
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>Student</Text>
        <Text style={Styles.headerText}>{students.length}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Quiz 1"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        data={students}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={flatListHeader()}
      />
    </View>
  );
};

export default QuizDetailsScreen;
