import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Modal from "react-native-modal";
import Styles from "./styles";
import User from "~/Assets/Svg/user";
import Input from "../InputField";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import QuizController from "../QuizController";
import Colors from "~/Assets/Colors";
const CreateNewGroupModal = ({
  modalVisible,
  setModalVisible,
  leftButtonAction,
  rightButtonAction,
  title,
  onChangeTitle,
  selectedStudents,
  setSelectedStudents,
  errorMessage,
  otherProps,
}) => {
  const groupReducer = useSelector((state) => state?.Group);
  const studentByProfessorData = groupReducer?.studentByProfessorData;
  const studentByProfessorError = groupReducer?.studentByProfessorError;
  const studentByProfessorState = groupReducer?.studentByProfessorState;

  const renderItem = ({ item, index }) => {
    const convertedItem = {
      center: item?.student?.username,
    };
    const findItem = selectedStudents.find((i) => i?._id === item?._id);
    return (
      <QuizController
        item={convertedItem}
        textColor={findItem ? Colors.white : Colors.black}
        backgroundColor={findItem ? Colors.green : Colors.white}
        onPress={() => {
          if (findItem) {
            const fileredStudents = selectedStudents.filter(
              (i) => i._id !== item?._id
            );
            setSelectedStudents(fileredStudents);
          } else {
            setSelectedStudents([...selectedStudents, item]);
          }
        }}
      />
    );
  };

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={() => setModalVisible(false)}
    >
      <View style={Styles.container}>
        <Text style={Styles.title}>{otherProps.title}</Text>
        <Input
          leftIcon={<User />}
          placeholder="Emri i Lendes"
          secureText={false}
          onChangeTextInput={onChangeTitle}
          errorMessage={errorMessage.id ? errorMessage.id : null}
          keyboardType="default"
          secureTextEntry={false}
          enabled={true}
        />
        <Text style={Styles.selectStudents}>Selekto studentat</Text>
        <Text style={Styles.selectedStudents}>
          Studentat e selektuar:{" "}
          {selectedStudents.map((i) => i?.student?.username).join(", ")}
        </Text>
        <FlatList
          style={{ height: 200 }}
          data={studentByProfessorData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={Styles.buttonView}>
          <TouchableOpacity
            style={[
              Styles.button,
              {
                backgroundColor: otherProps.leftButtonColor,
                marginRight: "2%",
                opacity: !title.trim() ? 0.5 : 1,
              },
            ]}
            disabled={!title.trim()}
            onPress={leftButtonAction}
          >
            <Text style={Styles.buttonText}>{otherProps.leftButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.button,
              {
                backgroundColor: otherProps.rightButtonColor,
                marginLeft: "2%",
              },
            ]}
            onPress={rightButtonAction}
          >
            <Text style={Styles.buttonText}>{otherProps.rightButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreateNewGroupModal;
