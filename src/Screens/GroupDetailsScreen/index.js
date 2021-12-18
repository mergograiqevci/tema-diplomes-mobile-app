import React, { useState } from "react";
import { View, Text, SectionList } from "react-native";
import Header from "~/Components/Header";
import Logout from "~/Assets/Svg/logout";
import AddPerson from "~/Assets/Svg/addPerson";
import Colors from "~/Assets/Colors";
import InviteOtherModal from "~/Components/InviteOtherModal";
import PopUpModal from "~/Components/PopUpModal";
import SectionHeader from "~/Components/SectionHeader";
import TasksBox from "~/Components/TasksBox";
import Plus from "~/Assets/Svg/plus";
const GroupDetailsScreen = ({ navigation, route }) => {
  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [id, setId] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const { item, tasks } = route.params;
  const user = "professor";

  const inviteModalProps = {
    title: "Shto nje student ne grup",
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
    setInviteModalVisible(false);
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
    return <TasksBox item={item} />;
  };

  const headerSectionList = () => {
    return (
      <Header
        title={item?.group?.title}
        leftIcon={<AddPerson />}
        handleLeftIcon={() => setInviteModalVisible(true)}
        rightIcon={user === "professor" ? <Plus /> : <Logout />}
        handleRightIcon={handleRightIcon}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={tasks}
        bounces={false}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={headerSectionList()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
      <InviteOtherModal
        modalVisible={inviteModalVisible}
        setModalVisible={setInviteModalVisible}
        leftButtonAction={leftButtonAction}
        rightButtonAction={rightButtonAction}
        onChangeId={setId}
        errorMessage={errorMessages}
        otherProps={inviteModalProps}
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

export default GroupDetailsScreen;
