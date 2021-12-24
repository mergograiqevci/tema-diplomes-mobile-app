import React, { useState, useEffect } from "react";
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
import OtherTasks from "~/Components/OtherTasks";
import isProfessor from "~/Functions/isProfessor";
import GroupActions from "~/Store/Group/Actions";
import { useSelector, useDispatch } from "react-redux";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import State from "~/Store/State";
import { useIsFocused } from "@react-navigation/native";
import * as GroupReducers from "~/Store/Group/Reducers";

const GroupDetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const focused = useIsFocused();

  const groupReducer = useSelector((state) => state?.Group);
  const leaveGroupData = groupReducer?.leaveGroupData;
  const leaveGroupError = groupReducer?.leaveGroupError;
  const leaveGroupState = groupReducer?.leaveGroupState;

  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [id, setId] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const { item, tasks } = route.params;

  const professor = isProfessor();

  const inviteModalProps = {
    title: "Shto nje student ne grup",
    leftButtonText: "Ruaj",
    leftButtonColor: Colors.appBaseColor,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.negative,
  };

  const deleteModalProps = {
    title: "A jeni te sigurt qe deshironi te dilni nga grupi ?",
    subTitle: "",
    leftButtonText: "Konfirmo",
    leftButtonColor: Colors.negative,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.appBaseColor,
  };

  useEffect(() => {
    if (leaveGroupState === State.FAILED) {
      setDeleteModalVisible(false);
      toasterMessage(
        `Ka ndodhur nje gabim gjate largimit nga grupi, ju lutem provoni me vone`,
        "error"
      );
    } else if (leaveGroupState === State.DONE) {
      setDeleteModalVisible(false);
      navigation.pop();
    }
  }, [leaveGroupState]);

  useEffect(() => {
    if (!focused) {
      dispatch(GroupReducers.clearPrevLeaveGroupData());
    }
  }, [focused]);

  const leftButtonAction = () => {
    dispatch(GroupActions.leaveGroup(item?._id));
  };

  const rightButtonAction = () => {
    setInviteModalVisible(false);
    setDeleteModalVisible(false);
  };

  const handleRightIcon = () => {
    if (professor) {
      navigation.push("NewTaskScreen", { group_id: item?._id });
    } else {
      setDeleteModalVisible(true);
    }
  };

  const renderItem = ({ item }) => {
    if (item?.isTask === true && item?.type !== "quiz") {
      return <TasksBox item={item} />;
    } else {
      return <OtherTasks item={item} />;
    }
  };

  const headerSectionList = () => {
    return (
      <Header
        title={item?.group?.title}
        leftIcon={<AddPerson />}
        handleLeftIcon={() => setInviteModalVisible(true)}
        rightIcon={professor ? <Plus /> : <Logout />}
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
