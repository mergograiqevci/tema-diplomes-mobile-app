import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import UserActions from "~/Store/User/Actions";
import Styles from "./styles";
import AuthForm from "~/Components/AuthForm";
import Colors from "~/Assets/Colors";
import Student from "~/Assets/Svg/student";
import State from "~/Store/State";
import Config from "~/Config";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loader from "~/Components/Loader";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state?.User);
  const loginState = userReducer?.loginState;
  const loginError = userReducer?.loginError;
  const errorMessageColor = userReducer?.errorMessageColor;
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const otherAuthProps = {
    userPlaceHolder: "Id",
    userError: "id",
    passPlaceHolder: "Password",
    passError: "password",
  };

  useEffect(() => {
    if (errorMessageColor !== Colors.white) {
      dispatch(UserActions.setErrorMessageColor(Colors.white));
    }
  }, []);

  useEffect(() => {
    if (loginState === State.FAILED) {
      setErrorMessages({
        [loginError.message && loginError.message === "id_not_valid"
          ? "id"
          : "password"]:
          Config.ErrorMessages[
          loginError.message ? loginError.message : "default_error"
          ],
      });
    }
  }, [loginState]);

  const handleLoginPressed = () => {
    if (id.trim() && password.trim()) {
      dispatch(UserActions.login(id, password));
    } else {
      setErrorMessages({ password: Config.ErrorMessages["fill_data"] });
    }
  };

  const renderTestAppButton = (title, testId, testPassword) => {
    return (
      <TouchableOpacity
        onPress={() => dispatch(UserActions.login(testId, testPassword))}
        style={Styles.testAppButton}>
        <Text style={Styles.testAppButtonText}>{title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }} bounces={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.container}>
          <SafeAreaView style={{ flex: 0 }} />
          <View style={Styles.loginLogo}>
            <Student width={130} height={90} />
          </View>
          <Text style={Styles.title}>Mirë se vini në takeQUIZ</Text>
          <AuthForm
            onChangeId={setId}
            onChangePassword={setPassword}
            errorMessage={errorMessages}
            buttonAction={handleLoginPressed}
            buttonBackgroundColor={Colors.blue}
            buttonText="Kyçu"
            otherProps={otherAuthProps}
          />
          {loginState === State.PROCESSING && <Loader />}
          <View style={Styles.testAppButtonContainer}>
            {renderTestAppButton("Vazhdo si student", "61d2fbea7d9fdf8c83c13192", "123")}
            {renderTestAppButton("Vazhdo si profesor", "61ba3f700566c37c3ad1c897", "123")}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
