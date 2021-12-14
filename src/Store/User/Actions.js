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
      // const token = getState().User?.token;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc29yQGdtYWlsLmNvbSIsImlhdCI6MTYzODcwODY1OCwiZXhwIjoyMTc4NzA4NjU4fQ.beSjl-u9rbPyHhVR2jv-yUZZJSxa9DLEQ6M0SpSZ3wo";
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

  static myProfile() {
    return async (dispatch) => {
      const token = await UserActions.getLocalToken();

      const token1 =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnRAZ21haWwuY29tIiwiaWF0IjoxNjM4NzA4NTYwLCJleHAiOjIxNzg3MDg1NjB9.s9eymBEoZVvzYrte1lR5VbL34I4ZcX3x4C8rRYh92SQ";
      dispatch(UserReducers.getProfileStart());
      API.User.my_profile(token)
        .then(async (res) => {
          await dispatch(this.setSafeAreaSize());
          dispatch(UserReducers.getProfileDone(res));
          dispatch(UserReducers.setToken(res?.data?.token));
        })
        .catch((err) => {
          dispatch(UserReducers.setToken(null));
          dispatch(UserReducers.getProfileFailed(err));
        });
    };
  }

  static logout() {
    return async (dispatch) => {
      this.clearLocalToken();
      const token = await UserActions.getLocalToken();
      if (!token) {
        dispatch(UserReducers.logoutDone());
      }
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
