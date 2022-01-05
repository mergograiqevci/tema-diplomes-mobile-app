import React, { useEffect } from "react";
import { BottomTabNavigator } from "../BottomTab";
import { useSelector, useDispatch } from "react-redux";
import SplashScreen from "~/Screens/SplashScreen";
import LoginScreen from "~/Screens/LoginScreen";
import * as UserReducers from "~/Store/User/Reducers";
import UserActions from "~/Store/User/Actions";

const Redirect = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.User?.token);
  const userIsValid = useSelector((state) => state.User?.userIsValid);

  useEffect(() => {
    if (token !== undefined) {
      if (token === null || token === "error") {
        dispatch(UserReducers.setUserIsValid(false));
      } else {
        dispatch(UserActions.myProfile(token));
      }
    }
  }, [token]);

  if (userIsValid === false) {
    return <LoginScreen />;
  }
  if (userIsValid === true) {
    return <BottomTabNavigator />;
  } else {
    return <SplashScreen />;
  }
};

export default Redirect;
