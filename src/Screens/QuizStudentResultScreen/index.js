import React, { useEffect, useState } from "react";
import { View, Text, SectionList } from "react-native";
import QuizController from "~/Components/QuizController";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import { useSelector, useDispatch } from "react-redux";
import TaskActions from "~/Store/Task/Actions";
import Styles from "./styles";
import formatQuizStyle from "~/Functions/array/formatQuizStyle";
import SectionHeader from "~/Components/SectionHeader";
import moment from "moment";
import DeleteIcon from "~/Assets/Svg/delete";
import State from "~/Store/State";
import PopUpModal from "~/Components/PopUpModal";
const QuizStudentResultScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const taskReducer = useSelector((state) => state?.Task);
  const quizStudentsResultData = taskReducer?.quizStudentsResultData;
  const quizStudentsResultError = taskReducer?.quizStudentsResultError;
  const quizStudentsResultState = taskReducer?.quizStudentsResultState;

  const dateInMilliSeconds = moment(item?.quiz?.date).utc().valueOf();
  const currentTimeInMilliSeconds = moment().utc().valueOf();
  const canDelete = dateInMilliSeconds >= currentTimeInMilliSeconds;

  const modalProps = {
    title: "A jeni të sigurt që dëshironi të fshieni detyren?",
    subTitle: "",
    leftButtonText: "Konfirmo",
    leftButtonColor: Colors.negative,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.appBaseColor,
  };

  const [modalVisible, setModalVisible] = useState(false);

  const onResponse = (type) => {
    if (type === "error") {
      toasterMessage("Ka ndodhur një gabim gjatë largimit të detyrës", "error");
    } else {
      navigation.pop();
    }
  };

  const handleRemoveTask = () => {
    setModalVisible(false);
    dispatch(TaskActions.deleteTask(item?._id, onResponse));
  };

  useEffect(() => {
    if (!canDelete) {
      dispatch(TaskActions.findStudentsByTask(item?._id));
    }
  }, []);

  const renderItem = ({ item }) => {
    const convertedItem = {
      left: item?.student?.username,
      right: item?.grade ? "Nota:" + item?.grade : item?.points,
      center: item?.grade && "Piket:" + item?.points,
    };
    return (
      <QuizController
        item={convertedItem}
        textColor={Colors.white}
        backgroundColor={Colors.green}
        onPress={() =>
          navigation.navigate("StudentRatingScreen", {
            styledQuestion: formatQuizStyle(
              JSON.parse(JSON.stringify(item?.completed_result)),
              true
            ),
            fullItem: item,
          })
        }
      />
    );
  };

  const studentsLength = () => {
    return (
      <Text style={Styles.headerText}>
        {quizStudentsResultData?.totalStudents}
      </Text>
    );
  };

  const notFound = (message) => {
    return (
      <View style={Styles.notFoundView}>
        <Text style={Styles.notFoundText}>{message}</Text>
      </View>
    );
  };

  const handleModalVisible = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Studentet"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        rightIcon={canDelete ? <DeleteIcon /> : studentsLength()}
        handleRightIcon={canDelete && handleModalVisible}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <SectionList
        sections={quizStudentsResultData?.d}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={
          (quizStudentsResultState === State.DONE &&
            quizStudentsResultData?.d?.length === 0 &&
            notFound("Nuk u gjete asnje student")) ||
          (canDelete && notFound("Kjo detyrë nuk është mbajtur akoma!"))
        }
      />
      {modalVisible && (
        <PopUpModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          leftButtonAction={handleRemoveTask}
          rightButtonAction={() => setModalVisible(false)}
          otherProps={modalProps}
        />
      )}
    </View>
  );
};

export default QuizStudentResultScreen;
