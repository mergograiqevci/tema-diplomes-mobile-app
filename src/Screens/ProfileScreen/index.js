import React, { useState } from "react";
import { View, Text } from "react-native";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Colors from "~/Assets/Colors";
import AuthForm from "~/Components/AuthForm";
import Styles from "./styles";
import Logout from "~/Assets/Svg/logout";
import PopUpModal from "~/Components/PopUpModal";
import UserActions from "~/Store/User/Actions";
import { useDispatch } from "react-redux";
const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const modalProps = {
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
  };

  const rightButtonAction = () => {
    setModalVisible(false);
  };

  const handleUpdateUser = () => {
    dispatch(UserActions.resetPassword(username, password));
  };

  return (
    <View>
      <Header
        title="Profili"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        rightIcon={<Logout />}
        handleRightIcon={() => setModalVisible(true)}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <Text style={Styles.title}>Të Dhënat</Text>

      <AuthForm
        onChangeId={setUsername}
        onChangePassword={setPassword}
        errorMessage={errorMessages}
        buttonAction={handleUpdateUser}
        buttonBackgroundColor={Colors.appBaseColor}
        buttonText="Ruaj"
      />
      <PopUpModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        leftButtonAction={leftButtonAction}
        rightButtonAction={rightButtonAction}
        otherProps={modalProps}
      />
    </View>
  );
};

export default ProfileScreen;
