import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "~/Components/Header";
import Colors from "~/Assets/Colors";
import CreateNewGroupModal from "~/Components/CreateNewGroupModal";
import PopUpModal from "~/Components/PopUpModal";
import OtherTasks from "~/Components/OtherTasks";
import AddGroup from "~/Assets/Svg/addGroup";
import isProfessor from "~/Functions/isProfessor";
import { useSelector, useDispatch } from "react-redux";
import TasksBox from "~/Components/TasksBox";
import GroupActions from "~/Store/Group/Actions";
import State from "~/Store/State";
import Styles from "./styles";
const GroupsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const toDoReducer = useSelector((state) => state?.ToDo);
  const toDoData = toDoReducer?.toDoData;
  const toDoError = toDoReducer?.toDoError;
  const toDoState = toDoReducer?.toDoState;
  const groupReducer = useSelector((state) => state?.Group);
  const studentByProfessorData = groupReducer?.studentByProfessorData;
  const studentByProfessorError = groupReducer?.studentByProfessorError;
  const studentByProfessorState = groupReducer?.studentByProfessorState;

  const [createGroupModalVisible, setCreateGroupModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [selectedStudents, setSelectedStudents] = useState([]);

  const professor = isProfessor();

  const groups = toDoData?.find((s) => s.key === "groups")?.data;

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

  useEffect(() => {
    if (professor) {
      if (
        studentByProfessorState === State.NOT_PROCESSED ||
        studentByProfessorState === State.FAILED
      ) {
        dispatch(GroupActions.findAllStudentsByProfessor());
      }
    }
  }, [studentByProfessorState]);

  const leftButtonAction = () => {
    dispatch(GroupActions.createNewGroup(title, selectedStudents));
    setCreateGroupModalVisible(false);
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

  const notFound = () => {
    return (
      <View style={Styles.notFoundView}>
        <Text style={Styles.notFoundText}>Nuk u gjetë asnjë grupë</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Grupet"
        rightIcon={professor && <AddGroup />}
        handleRightIcon={() => professor && setCreateGroupModalVisible(true)}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <FlatList
        style={{ paddingVertical: 3 }}
        data={groups}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        ListEmptyComponent={notFound()}
      />
      <CreateNewGroupModal
        modalVisible={createGroupModalVisible}
        setModalVisible={setCreateGroupModalVisible}
        leftButtonAction={leftButtonAction}
        rightButtonAction={rightButtonAction}
        title={title}
        onChangeTitle={setTitle}
        selectedStudents={selectedStudents}
        setSelectedStudents={setSelectedStudents}
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
