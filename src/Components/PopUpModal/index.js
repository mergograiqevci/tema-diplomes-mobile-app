import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Styles from "./styles";
const PopUpModal = ({
  modalVisible,
  setModalVisible,
  leftButtonAction,
  rightButtonAction,
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
        <Text style={Styles.title}>{otherProps?.title}</Text>
        <Text style={Styles.subTitle}>{otherProps?.subTitle}</Text>
        <View style={Styles.buttonView}>
          <TouchableOpacity
            style={[
              Styles.button,
              {
                backgroundColor: otherProps?.leftButtonColor,
                marginRight: "2%",
              },
            ]}
            onPress={leftButtonAction}
          >
            <Text style={Styles.buttonText}>{otherProps?.leftButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.button,
              {
                backgroundColor: otherProps?.rightButtonColor,
                marginLeft: "2%",
              },
            ]}
            onPress={rightButtonAction}
          >
            <Text style={Styles.buttonText}>{otherProps?.rightButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PopUpModal;
