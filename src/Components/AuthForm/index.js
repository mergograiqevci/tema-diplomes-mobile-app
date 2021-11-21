import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Input from "../InputField";
import Styles from "./styles";
import Lock from "~/Assets/Svg/lock";
import Unlock from "~/Assets/Svg/unlock";
import { useNavigation } from "@react-navigation/core";
import User from "~/Assets/Svg/user";
import Password from "~/Assets/Svg/password";

const AuthForm = ({
  onChangeId,
  onChangePassword,
  errorMessage,
  buttonAction,
}) => {
  const navigation = useNavigation();
  const [lockIcon, setLockIcon] = useState(true);

  return (
    <View style={Styles.container}>
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
      <Input
        leftIcon={<Password />}
        placeholder="Password"
        onChangeTextInput={onChangePassword}
        errorMessage={errorMessage.password ? errorMessage.password : null}
        keyboardType="default"
        secureTextEntry={lockIcon}
        icon={lockIcon === true ? <Lock /> : <Unlock />}
        handleIcon={() => setLockIcon(!lockIcon)}
        enabled={true}
      />
      <TouchableOpacity
        style={Styles.loginButton}
        onPress={() => buttonAction()}
      >
        <Text style={Styles.loginButtonText}>Kyçu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
