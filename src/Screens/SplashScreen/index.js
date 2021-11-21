import React, { useEffect } from "react";
import { Image, View, Text } from "react-native";
import Images from "~/Assets/Images";
import Styles from "./styles";
import UserActions from "~/Store/User/Actions";
import { useSelector, useDispatch } from "react-redux";
const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);

  useEffect(() => {
    //zevendsohet me request per autologin
    setTimeout(() => {
      // navigation.push("LoginScreen");
      dispatch(UserActions.setSafeAreaSize());
    }, 2000);
  }, []);
  useEffect(() => {
    if (Object.keys(safeAreaSize).length !== 0) {
      navigation.push("HomeScreen");
    }
  }, [safeAreaSize]);
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
