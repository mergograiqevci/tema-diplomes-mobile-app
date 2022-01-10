import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Styles from "./styles";
import TaskActions from "~/Store/Task/Actions";
import { useSelector, useDispatch } from "react-redux";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const StudentRatingScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const studentsByQuiz = useSelector((state) => state?.Task?.studentsByQuiz);
  const styledQuestion = studentsByQuiz?.styledQuestion;
  const fullItem = studentsByQuiz?.fullItem;
  const [grade, setGrade] = useState(
    fullItem?.quiz?.grade ? fullItem?.quiz?.grade : ""
  );

  const flatListHeader = () => {
    return (
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>Pyetje</Text>
        <Text style={Styles.headerText}>{styledQuestion.length}</Text>
      </View>
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

  const handleGradeTask = () => {
    const request = {
      task_id: fullItem?._id,
      student_id: fullItem?.student?._id,
      grade: grade,
    };

    dispatch(TaskActions.gradeTask(request, toasterMessage));
  };

  const flatListFooter = () => {
    return (
      <View style={{ flex: 1, marginBottom: 20 }}>
        <Text style={Styles.footerText}>Piket: {fullItem?.quiz?.points}</Text>
        <View style={Styles.gradeView}>
          <TextInput
            placeholder="Nota / 10"
            onChangeText={setGrade}
            keyboardType="numeric"
            style={Styles.inputStyle}
            value={grade}
          />
          <TouchableOpacity
            style={[
              Styles.buttonSaveView,
              {
                opacity: !(
                  grade.trim() &&
                  parseInt(grade) >= 5 &&
                  parseInt(grade) <= 10
                )
                  ? 0.5
                  : 1,
              },
            ]}
            onPress={handleGradeTask}
            disabled={
              !(grade.trim() && parseInt(grade) >= 5 && parseInt(grade) <= 10)
            }
          >
            <Text style={Styles.buttonSaveViewText}>Ruaj</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }} bounces={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Header
            title={fullItem?.student?.username}
            leftIcon={<ArrowLeft />}
            handleLeftIcon={() => navigation.goBack()}
            safeAreaBackgroundColor={Colors.appBaseColor}
            backgroundColor={Colors.appBaseColor}
            height={50}
          />
          <FlatList
            data={styledQuestion}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderQuestion}
            ListHeaderComponent={flatListHeader()}
            ListFooterComponent={flatListFooter()}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default StudentRatingScreen;
