import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Styles from "./styles";
import User from "~/Assets/Svg/user";
import Input from "../InputField";
const InviteOtherModal = ({
  modalVisible,
  setModalVisible,
  leftButtonAction,
  rightButtonAction,
  onChangeId,
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
          placeholder="Id"
          secureText={false}
          onChangeTextInput={onChangeId}
          errorMessage={errorMessage.id ? errorMessage.id : null}
          keyboardType="default"
          secureTextEntry={false}
          enabled={true}
        />
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

export default InviteOtherModal;
