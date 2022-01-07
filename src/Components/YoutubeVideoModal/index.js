import React from "react";
import Modal from "react-native-modal";
import Styles from "./styles";
import VideoComponent from "../VideoComponent";
const YoutubeVideoModal = ({ item, modalVisible, setModalVisible }) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={Styles.container}
    >
      <VideoComponent item={item} setModalVisible={setModalVisible} />
    </Modal>
  );
};

export default YoutubeVideoModal;
