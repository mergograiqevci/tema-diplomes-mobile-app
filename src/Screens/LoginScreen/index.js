import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import UserActions from "~/Store/User/Actions";
import Styles from "./styles";
import LoginLogo from "~/Assets/Svg/loginLogo";
import AuthForm from "~/Components/AuthForm";
const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.User);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleLoginPressed = () => {
    dispatch(UserActions.login(id, password));
  };

  const handleBackPressed = () => {
    props.navigation.pop();
  };

  return (
    <View style={Styles.container}>
      <SafeAreaView style={{ flex: 0 }} />
      <View style={Styles.loginLogo}>
        <LoginLogo />
      </View>
      <Text style={Styles.title}>Mirë se vini në takeQUIZ</Text>
      <AuthForm
        onChangeId={setId}
        onChangePassword={setPassword}
        errorMessage={errorMessages}
        buttonAction={handleLoginPressed}
      />
    </View>
  );
};

export default LoginScreen;
