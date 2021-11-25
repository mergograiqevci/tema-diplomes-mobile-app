import React from "react";
import { BottomTabNavigator } from "../BottomTab";
import { useSelector } from "react-redux";
import SplashScreen from "~/Screens/SplashScreen";
const Redirect = () => {
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  if (Object.keys(safeAreaSize).length === 0) {
    return <SplashScreen />;
  } else {
    return <BottomTabNavigator />;
  }
};

export default Redirect;
