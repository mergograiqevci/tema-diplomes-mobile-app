import React, { useState } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import UserActions from "~/Store/User/Actions";
import Styles from "./styles";
import Student from "~/Assets/Svg/student";
import AuthForm from "~/Components/AuthForm";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
const CreateAccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.User);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleRegisterPressed = () => {
    dispatch(UserActions.registerStudent(username, password));
  };

  return (
    <View style={Styles.container}>
      <Header
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />
      <View style={Styles.loginLogo}>
        <Student />
      </View>
      <Text style={Styles.title}>Menaxhimi i Studentëve</Text>
      <AuthForm
        onChangeId={setUsername}
        onChangePassword={setPassword}
        errorMessage={errorMessages}
        buttonAction={handleRegisterPressed}
        buttonBackgroundColor={Colors.blue}
        buttonText="Krijo llogarine"
      />
    </View>
  );
};

export default CreateAccountScreen;
