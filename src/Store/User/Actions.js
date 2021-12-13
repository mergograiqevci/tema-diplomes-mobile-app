import * as API from "~/API";
import * as UserReducers from "./Reducers";
import SafeArea from "react-native-safe-area";
class UserActions {
  static login(id, password) {
    return (dispatch) => {
      dispatch(UserReducers.loginStart());
      API.User.login(id, password)
        .then((data) => {
          dispatch(UserReducers.loginDone(data));
        })
        .catch((error) => {
          dispatch(UserReducers.loginFailed(error));
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
        .then((data) => {
          dispatch(UserReducers.registerDone(data));
        })
        .catch((error) => {
          dispatch(UserReducers.registerFailed(error));
        });
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
        .then((data) => {
          dispatch(UserReducers.resetPasswordDone(data));
        })
        .catch((error) => {
          dispatch(UserReducers.resetPasswordFailed(error));
        });
    };
  }

  static myProfile() {
    return (dispatch, getState) => {
      // const token = getState().User?.token;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc29yQGdtYWlsLmNvbSIsImlhdCI6MTYzODcwODY1OCwiZXhwIjoyMTc4NzA4NjU4fQ.beSjl-u9rbPyHhVR2jv-yUZZJSxa9DLEQ6M0SpSZ3wo";
      dispatch(UserReducers.getProfileStart());
      API.User.my_profile(token)
        .then((data) => {
          console.log("PROFILE:", data);
          dispatch(UserReducers.getProfileDone(data));
        })
        .catch((error) => {
          console.log("PROFILE: ERR", error);

          dispatch(UserReducers.getProfileFailed(error));
        });
    };
  }

  static setSafeAreaSize() {
    return (dispatch) => {
      SafeArea.getSafeAreaInsetsForRootView().then((result) => {
        dispatch(UserReducers.setSafeAreaSize(result.safeAreaInsets));
      });
    };
  }
}

export default UserActions;
