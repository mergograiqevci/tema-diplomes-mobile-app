import React, { useState, useEffect } from "react";
import { View, SectionList, TouchableOpacity } from "react-native";
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
import TaskNotFound from "~/Components/TaskNotFound";
import ArrowLeft from "~/Assets/Svg/arrowLeft";

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

const PADDING_HORIZONTAL_BETWEEN_RIGHT_ICONS = 10;

const GroupDetailsScreen = ({ navigation, route }) => {
  const { item, tasks } = route.params;
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const groupReducer = useSelector((state) => state?.Group);
  const leaveGroupData = groupReducer?.leaveGroupData;
  const leaveGroupError = groupReducer?.leaveGroupError;
  const leaveGroupState = groupReducer?.leaveGroupState;
  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [id, setId] = useState("");
  const professor = isProfessor();

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

  const leftButtonActionInInviteOtherModal = () => {
    const request = {
      group_id: item?._id,
      student_id: id,
    };
    dispatch(GroupActions.insertStudentInGroup(request));
    setInviteModalVisible(false);
  };

  const renderItem = ({ item }) => {
    if (item?.isTask === true && item?.type !== "quiz") {
      return <TasksBox item={item} />;
    } else {
      return <OtherTasks item={item} />;
    }
  };

  const renderHeaderRightView = () => {

    const iconOnClick = (icon, onPress) => {
      return (<TouchableOpacity onPress={onPress} style={{ paddingHorizontal: PADDING_HORIZONTAL_BETWEEN_RIGHT_ICONS }}>
        {icon}
      </TouchableOpacity>)
    }

    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {iconOnClick(<AddPerson />, () => setInviteModalVisible(true))}
        {iconOnClick(professor ? <Plus /> : <Logout />, handleRightIcon)}
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={item?.group?.title ?? item?.title}
        customTitleStyle={{ marginRight: -PADDING_HORIZONTAL_BETWEEN_RIGHT_ICONS * 2 }}
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        customRightView={renderHeaderRightView}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <SectionList
        sections={tasks}
        bounces={false}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        stickySectionHeadersEnabled={false}
      />
      <InviteOtherModal
        modalVisible={inviteModalVisible}
        setModalVisible={setInviteModalVisible}
        leftButtonAction={leftButtonActionInInviteOtherModal}
        rightButtonAction={rightButtonAction}
        id={id}
        onChangeId={setId}
        errorMessage={{}}
        otherProps={inviteModalProps}
      />
      <PopUpModal
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        leftButtonAction={leftButtonAction}
        rightButtonAction={rightButtonAction}
        otherProps={deleteModalProps}
      />
      {(!tasks || tasks.length === 0) && (
        <TaskNotFound message={"Ky grup nuk ka asnjë detyrë"} />
      )}
    </View>
  );
};

export default GroupDetailsScreen;
