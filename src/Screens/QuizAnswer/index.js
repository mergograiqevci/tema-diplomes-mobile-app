import React, { useEffect } from "react";
import { View, FlatList, Text, StatusBar } from "react-native";
import Header from "~/Components/Header";
import Colors from "~/Assets/Colors";
import { useSelector } from "react-redux";
import QuizController from "~/Components/QuizController";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Styles from "./styles";
const QuizAnswer = ({ navigation, route }) => {
  const { item } = route.params;
  const toDoReducer = useSelector((state) => state?.ToDo);
  const safeAreaSize = useSelector((state) => state?.User.safeAreaSize);
  const quizResultData = toDoReducer?.getQuizResultData;

  const renderItem = ({ item, index }) => {
    const convertedItem = {
      left: index + 1 + " )",
      center: item?.v,
    };

    return (
      <QuizController
        item={convertedItem}
        textColor={
          item?.style?.empty === true || item?.style?.borderRadius
            ? Colors.black
            : Colors.white
        }
        backgroundColor={
          item?.style?.backgroundColor
            ? item?.style?.backgroundColor
            : Colors.white
        }
        borderColor={item?.style?.borderRadius && item?.style?.borderRadius}
      />
    );
  };

  const renderQuestion = ({ item }) => {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text style={Styles.question}>{item?.question}</Text>
        <FlatList
          data={item?.options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1, paddingBottom: safeAreaSize?.bottom }}>
      <StatusBar barStyle="light-content" />
      <Header
        title={item?.quiz?.title}
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.pop()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        data={quizResultData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderQuestion}
      />
    </View>
  );
};

export default QuizAnswer;
