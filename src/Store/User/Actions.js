import * as API from "~/API";
import * as UserReducers from "./Reducers";
import SafeArea from "react-native-safe-area";
class UserActions {
  static login(username, password) {
    return (dispatch) => {
      dispatch(UserReducers.loginStart());

      API.User.login(username, password)
        .then((data) => {
          dispatch(UserReducers.loginDone(data));
        })
        .catch((error) => {
          dispatch(UserReducers.loginFailed(error));
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
