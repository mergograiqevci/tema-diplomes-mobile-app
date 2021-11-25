import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Styles from "./styles";
import User from "~/Assets/Svg/user";
import Input from "../InputField";
import { Picker } from "@react-native-picker/picker";
const CreateNewGroupModal = ({
  modalVisible,
  setModalVisible,
  leftButtonAction,
  rightButtonAction,
  onChangeId,
  selectedLanguage,
  setSelectedLanguage,
  errorMessage,
  otherProps,
}) => {
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
          onChangeTextInput={onChangeId}
          errorMessage={errorMessage.id ? errorMessage.id : null}
          keyboardType="default"
          secureTextEntry={false}
          enabled={true}
        />
        <Text style={Styles.selectStudents}>Selekto studentat</Text>
        <Text style={Styles.selectedStudents}>
          Studentat e selektuar: {selectedLanguage}
        </Text>
        <Picker
          selectedValue={setSelectedLanguage[setSelectedLanguage.length - 1]}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage([...selectedLanguage, " ", itemValue])
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js1" />
          <Picker.Item label="Java" value="java1" />
          <Picker.Item label="JavaScript" value="js2" />
          <Picker.Item label="Java" value="java2" />
          <Picker.Item label="JavaScript" value="js3" />
        </Picker>
        <View style={Styles.buttonView}>
          <TouchableOpacity
            style={[
              Styles.button,
              {
                backgroundColor: otherProps.leftButtonColor,
                marginRight: "2%",
              },
            ]}
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
