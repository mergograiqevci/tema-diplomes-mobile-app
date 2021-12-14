import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Input from "../InputField";
import Styles from "./styles";
import Lock from "~/Assets/Svg/lock";
import Unlock from "~/Assets/Svg/unlock";
import User from "~/Assets/Svg/user";
import Password from "~/Assets/Svg/password";

const AuthForm = ({
  username,
  onChangeId,
  onChangePassword,
  errorMessage,
  buttonAction,
  buttonBackgroundColor,
  buttonText,
  otherProps,
}) => {
  const [lockIcon, setLockIcon] = useState(true);
  return (
    <View style={Styles.container}>
      <Input
        leftIcon={<User />}
        placeholder={otherProps?.userPlaceHolder}
        secureText={false}
        onChangeTextInput={onChangeId}
        errorMessage={
          errorMessage[otherProps?.userError]
            ? errorMessage[otherProps?.userError]
            : null
        }
        value={otherProps.userValue && otherProps.userValue}
        keyboardType="default"
        secureTextEntry={false}
        enabled={
          otherProps?.userValueEnabled ? otherProps?.userValueEnabled : true
        }
      />
      <Input
        leftIcon={<Password />}
        placeholder="Password"
        onChangeTextInput={onChangePassword}
        errorMessage={
          errorMessage[otherProps?.passError]
            ? errorMessage[otherProps?.passError]
            : null
        }
        keyboardType="default"
        secureTextEntry={lockIcon}
        icon={lockIcon === true ? <Lock /> : <Unlock />}
        handleIcon={() => setLockIcon(!lockIcon)}
        enabled={true}
      />
      <TouchableOpacity
        style={[
          Styles.loginButton,
          {
            backgroundColor: buttonBackgroundColor,
          },
        ]}
        onPress={() => buttonAction()}
      >
        <Text style={Styles.loginButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
