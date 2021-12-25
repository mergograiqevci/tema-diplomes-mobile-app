import React from "react";
import { BottomTabNavigator } from "../BottomTab";
import { useSelector } from "react-redux";
import SplashScreen from "~/Screens/SplashScreen";
import LoginScreen from "~/Screens/LoginScreen";
import QuizStudentResultScreen from "~/Screens/QuizStudentResultScreen";
const Redirect = () => {
  const token = useSelector((state) => state.User?.token);
  // console.log(token);
  if (token === null) {
    return <LoginScreen />;
  }
  if (token !== undefined && token !== "error") {
    return <BottomTabNavigator />;
  } else {
    return <SplashScreen />;
  }
};

export default Redirect;
