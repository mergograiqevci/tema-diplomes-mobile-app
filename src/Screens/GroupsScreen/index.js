import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "~/Components/Header";
import Logout from "~/Assets/Svg/logout";
import Colors from "~/Assets/Colors";
import CreateNewGroupModal from "~/Components/CreateNewGroupModal";
import PopUpModal from "~/Components/PopUpModal";
import groupsData from "~/Functions/fakeData/groupsData";
import OtherTasks from "~/Components/OtherTasks";
import Plus from "~/Assets/Svg/plus";
import AddGroup from "~/Assets/Svg/addGroup";
import isProfessor from "~/Functions/isProfessor";
import { useSelector } from "react-redux";
import TasksBox from "~/Components/TasksBox";
const GroupsScreen = ({ navigation }) => {
  const toDoReducer = useSelector((state) => state?.ToDo);
  const toDoData = toDoReducer?.toDoData;
  const toDoError = toDoReducer?.toDoError;
  const toDoState = toDoReducer?.toDoState;
  const [createGroupModalVisible, setCreateGroupModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [id, setId] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState();

  const professor = isProfessor();

  const createGroupModalProps = {
    title: "Krijio nje grup te ri",
    leftButtonText: "Ruaj",
    leftButtonColor: Colors.appBaseColor,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.negative,
  };

  const deleteModalProps = {
    title: "A jeni te sigurt qe deshironi te dilni nga kuizi ?",
    subTitle:
      " The Mathematics Placement Exam (MPE) is a 90-minute, 60-item multiple choice exam that tests skills and understandings from precalculus",
    leftButtonText: "Konfirmo",
    leftButtonColor: Colors.negative,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.appBaseColor,
  };

  const leftButtonAction = () => {
    console.log("Left Button onclick");
    navigation.pop();
  };

  const rightButtonAction = () => {
    setCreateGroupModalVisible(false);
    setDeleteModalVisible(false);
  };

  const renderItem = ({ item, index }) => {
    if (item?.isTask === true && item?.type !== "quiz") {
      return <TasksBox item={item} />;
    } else {
      return <OtherTasks item={item} />;
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Grupet"
        leftIcon={professor && <AddGroup />}
        handleLeftIcon={() => professor && setCreateGroupModalVisible(true)}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        style={{ paddingTop: 20 }}
        data={toDoData?.find((s) => s.key === "groups")?.data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
      />
      <CreateNewGroupModal
        modalVisible={createGroupModalVisible}
        setModalVisible={setCreateGroupModalVisible}
        leftButtonAction={leftButtonAction}
        rightButtonAction={rightButtonAction}
        onChangeId={setId}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        errorMessage={errorMessages}
        otherProps={createGroupModalProps}
      />
      <PopUpModal
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        leftButtonAction={leftButtonAction}
        rightButtonAction={rightButtonAction}
        otherProps={deleteModalProps}
      />
    </View>
  );
};

export default GroupsScreen;
