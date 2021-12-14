import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import UserActions from "~/Store/User/Actions";
import Styles from "./styles";
import Student from "~/Assets/Svg/student";
import AuthForm from "~/Components/AuthForm";
import Colors from "~/Assets/Colors";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Config from "~/Config";
import State from "~/Store/State";
import toasterMessage from "~/Functions/toaster/toasterMessage";
const CreateAccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state?.User);
  const register = userReducer?.register;
  const registerError = userReducer?.registerError;
  const registerState = userReducer?.registerState;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const otherAuthProps = {
    userPlaceHolder: "Username",
    userError: "username",
    passPlaceHolder: "Password",
    passError: "password",
  };

  useEffect(() => {
    if (registerState === State.DONE) {
      toasterMessage(
        `Keni krijuar me sukses një llogari të re për studentin: ${username} `,
        "success"
      );
      dispatch(UserActions.clearPrevRegisterStudentData());
    } else if (registerState === State.FAILED) {
      setErrorMessages({
        ["password"]:
          Config.ErrorMessages[
            registerError.message ? registerError.message : "default_error"
          ],
      });
    }
  }, [registerState]);

  const handleRegisterPressed = () => {
    if (username.trim() && password.trim()) {
      dispatch(UserActions.registerStudent(username, password));
    } else {
      setErrorMessages({ password: Config.ErrorMessages["fill_data"] });
    }
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
        otherProps={otherAuthProps}
      />
    </View>
  );
};

export default CreateAccountScreen;
