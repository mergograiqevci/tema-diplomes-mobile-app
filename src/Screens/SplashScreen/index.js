import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import Styles from "./styles";
import UserActions from "~/Store/User/Actions";
import { useDispatch } from "react-redux";
import Student from "~/Assets/Svg/student";
const SplashScreen = () => {
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const t = 800;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: t,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      fadeOut();
    }, t);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: t,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      fadeIn();
    }, t);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(UserActions.setTokenToRedux());
    }, 1700);
  }, []);

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={Styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Student width={130} height={90} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
