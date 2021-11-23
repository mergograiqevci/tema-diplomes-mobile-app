import React from "react";
import { View, Text, FlatList } from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
const QuizStudentResultScreen = ({ navigation }) => {
  const students = [
    { id: 1, left: "1", center: "Mergim Graiqevci", right: "18/20" },
    { id: 2, left: "2", center: "Mergim Graiqevci", right: "14/20" },
    { id: 3, left: "3", center: "Mergim Graiqevci", right: "13/20" },
    { id: 4, left: "4", center: "Mergim Graiqevci", right: "20/20" },
  ];
  const renderItem = ({ item }) => {
    return (
      <QuizController
        item={item}
        textColor={Colors.black}
        backgroundColor={Colors.white}
      />
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.appBaseColor }}>
      <Header
        title="Studentet"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        style={{ marginTop: 100 }}
        data={students}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        // ListHeaderComponent={flatListHeader()}
      />
    </View>
  );
};

export default QuizStudentResultScreen;
