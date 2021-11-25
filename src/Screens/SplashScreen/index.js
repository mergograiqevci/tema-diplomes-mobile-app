import React, { useEffect } from "react";
import { Image, View, Text } from "react-native";
import Images from "~/Assets/Images";
import Styles from "./styles";
import UserActions from "~/Store/User/Actions";
import { useDispatch } from "react-redux";
const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //zevendsohet me request per autologin
    setTimeout(() => {
      // navigation.push("LoginScreen");
      dispatch(UserActions.setSafeAreaSize());
    }, 2000);
  }, []);
  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} source={Images.Logo} />
      <Text style={Styles.title}>
        take<Text style={Styles.titleBold}>Quiz</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
