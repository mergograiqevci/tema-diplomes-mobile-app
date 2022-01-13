import * as API from "~/API";
import * as UserReducers from "./Reducers";
import SafeArea from "react-native-safe-area";
import AsyncStorage from "@react-native-community/async-storage";
class UserActions {
  static login(id, password) {
    return (dispatch) => {
      dispatch(UserReducers.loginStart());
      API.User.login(id, password)
        .then(async (res) => {
          await dispatch(this.setSafeAreaSize());
          this.saveLocalToken(res?.data?.token);
          dispatch(UserReducers.setToken(res?.data?.token));
          dispatch(UserReducers.loginDone(res));
        })
        .catch((err) => {
          dispatch(UserReducers.loginFailed(err));
        });
    };
  }
  static registerStudent(username, password) {
    const request = {
      username,
      password,
      role: "student",
    };
    return (dispatch, getState) => {
      const token = getState().User?.token;
      dispatch(UserReducers.registerStart());
      API.User.register_student(token, request)
        .then((res) => {
          dispatch(UserReducers.registerDone(res));
        })
        .catch((err) => {
          dispatch(UserReducers.registerFailed(err));
        });
    };
  }

  static clearPrevRegisterStudentData() {
    return (dispatch) => {
      dispatch(UserReducers.clearPrevRegisterStudentData());
    };
  }
  static resetPassword(username, password) {
    const request = {
      username,
      password,
      role: "student",
    };
    return (dispatch) => {
      dispatch(UserReducers.resetPasswordStart());
      API.User.reset_password(request)
        .then((res) => {
          dispatch(UserReducers.resetPasswordDone(res));
        })
        .catch((err) => {
          dispatch(UserReducers.resetPasswordFailed(err));
        });
    };
  }

  static clearPrevResetPasswordData() {
    return (dispatch) => {
      dispatch(UserReducers.clearPrevResetPasswordData());
    };
  }

  static setTokenToRedux() {
    return async (dispatch) => {
      const token = await UserActions.getLocalToken();
      dispatch(UserReducers.setToken(token));
    };
  }

  static myProfile() {
    return async (dispatch, getState) => {
      const token = getState().User?.token;

      dispatch(UserReducers.getProfileStart());
      API.User.my_profile(token)
        .then(async (res) => {
          await dispatch(this.setSafeAreaSize());
          dispatch(UserReducers.setUserIsValid(true));
          dispatch(UserReducers.getProfileDone(res));
        })
        .catch((err) => {
          dispatch(UserReducers.setUserIsValid(false));
          dispatch(UserReducers.getProfileFailed(err));
        });
    };
  }

  static logout() {
    return async (dispatch) => {
      this.clearLocalToken();
      const token = await UserActions.getLocalToken();
      if (!token) {
        dispatch(this.setTokenToRedux(token));
        dispatch(UserReducers.logoutDone());
      }
    };
  }

  static setErrorMessageColor(color) {
    return (dispatch) => {
      dispatch(UserReducers.setErrorMessageColor(color));
    };
  }
  static setSafeAreaSize() {
    return (dispatch) => {
      SafeArea.getSafeAreaInsetsForRootView().then((result) => {
        dispatch(UserReducers.setSafeAreaSize(result.safeAreaInsets));
      });
    };
  }
  static getLocalToken = async () => {
    try {
      return await AsyncStorage.getItem("token");
    } catch (e) {
      return "error";
    }
  };
  static saveLocalToken = async (value) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      return "error";
    }
  };
  static clearLocalToken = async () => {
    await AsyncStorage.removeItem("token");
  };
}

export default UserActions;
