import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "~/Components/Header";
import Colors from "~/Assets/Colors";
import AuthForm from "~/Components/AuthForm";
import Styles from "./styles";
import Logout from "~/Assets/Svg/logout";
import PopUpModal from "~/Components/PopUpModal";
import UserActions from "~/Store/User/Actions";
import { useDispatch, useSelector } from "react-redux";
import State from "~/Store/State";
import Config from "~/Config";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import isProfessor from "~/Functions/isProfessor";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const userReducer = useSelector((state) => state?.User);
  const myProfile = userReducer?.myProfile;
  const resetPassword = userReducer?.resetPassword;
  const resetPasswordError = userReducer?.resetPasswordError;
  const resetPasswordState = userReducer?.resetPasswordState;
  const errorMessageColor = userReducer?.errorMessageColor;
  const [username, setUsername] = useState(myProfile?.data?.username);
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const professor = isProfessor();

  useEffect(() => {
    if (Object.keys(myProfile).length === 0) {
      dispatch(UserActions.myProfile());
    }
  }, []);

  useEffect(() => {
    if (Object.keys(myProfile).length !== 0) {
      if (!username) {
        setUsername(myProfile?.data?.username);
      }
    }
  }, [myProfile]);

  useEffect(() => {
    if (focused) {
      if (errorMessageColor !== Colors.negative) {
        dispatch(UserActions.setErrorMessageColor(Colors.negative));
      }
    }
  }, [focused]);

  const modalProps = {
    title: "A jeni te sigurt qe deshironi te dilni?",
    subTitle: "",
    leftButtonText: "Konfirmo",
    leftButtonColor: Colors.negative,
    rightButtonText: "Kthehu",
    rightButtonColor: Colors.appBaseColor,
  };

  const otherAuthProps = {
    userValue: username,
    userValueEnabled: false,
    userPlaceHolder: "Username",
    userError: "username",
    passPlaceHolder: "Password",
    passError: "password",
  };
  const leftButtonAction = () => {
    dispatch(UserActions.logout());
  };

  const rightButtonAction = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (resetPasswordState === State.DONE) {
      toasterMessage(`Keni ndryshuar me sukses fjalëkalimin`, "success");
      dispatch(UserActions.clearPrevResetPasswordData());
      setErrorMessages({});
    } else if (resetPasswordState === State.FAILED) {
      setErrorMessages({
        ["password"]:
          Config.ErrorMessages[
            resetPasswordError.message
              ? resetPasswordError.message
              : "default_error"
          ],
      });
    }
  }, [resetPasswordState]);

  const handleUpdateUser = () => {
    if (password.trim()) {
      dispatch(UserActions.resetPassword(username, password));
    } else {
      setErrorMessages({ password: Config.ErrorMessages["fill_data"] });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Profili"
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
        otherProps={otherAuthProps}
      />
      {modalVisible && (
        <PopUpModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          leftButtonAction={leftButtonAction}
          rightButtonAction={rightButtonAction}
          otherProps={modalProps}
        />
      )}
      {professor && (
        <TouchableOpacity
          style={Styles.accountButton}
          onPress={() => navigation.push("CreateAccountScreen")}
        >
          <Text style={Styles.accountButtonText}>
            Krijo llogari per student
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileScreen;
