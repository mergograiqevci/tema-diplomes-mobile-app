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
const GroupsScreen = ({ navigation }) => {
  const [createGroupModalVisible, setCreateGroupModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [id, setId] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState();
  const user = "professor";

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

  const handleRightIcon = () => {
    if (user === "professor") {
      navigation.push("NewTaskScreen");
    } else {
      setDeleteModalVisible(true);
    }
  };

  const renderItem = ({ item }) => {
    return <OtherTasks item={item} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Grupe"
        leftIcon={<AddGroup />}
        handleLeftIcon={() => setCreateGroupModalVisible(true)}
        rightIcon={user === "professor" ? <Plus /> : <Logout />}
        handleRightIcon={handleRightIcon}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        style={{ paddingTop: 30 }}
        data={groupsData}
        bounces={false}
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
