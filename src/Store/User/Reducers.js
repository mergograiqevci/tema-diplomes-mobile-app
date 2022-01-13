import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";
import Colors from "~/Assets/Colors";
const initialState = {
  loginData: null,
  loginError: null,
  loginState: State.NOT_PROCESSED,
  safeAreaSize: {},
  register: {},
  registerError: null,
  registerState: State.NOT_PROCESSED,
  resetPassword: {},
  resetPasswordError: null,
  resetPasswordState: State.NOT_PROCESSED,
  myProfile: {},
  myProfileError: null,
  myProfileState: State.NOT_PROCESSED,
  token: undefined,
  userIsValid: undefined,
  errorMessageColor: Colors.negative,
};

const slice = createSlice({
  name: "User",
  initialState,
  reducers: {
    loginStart(state) {
      state.loginState = State.PROCESSING;
    },
    loginDone(state, action) {
      state.loginData = action.payload;
      state.loginState = State.DONE;
    },
    loginFailed(state, action) {
      state.loginError = action.payload;
      state.loginState = State.FAILED;
    },
    registerStart(state) {
      state.registerState = State.PROCESSING;
    },
    registerDone(state, action) {
      state.register = action.payload;
      state.registerState = State.DONE;
    },
    registerFailed(state, action) {
      state.registerError = action.payload;
      state.registerState = State.FAILED;
    },
    clearPrevRegisterStudentData(state) {
      state.register = {};
      state.registerError = null;
      state.registerState = State.NOT_PROCESSED;
    },
    resetPasswordStart(state) {
      state.resetPasswordState = State.PROCESSING;
    },
    resetPasswordDone(state, action) {
      state.resetPassword = action.payload;
      state.resetPasswordState = State.DONE;
    },
    resetPasswordFailed(state, action) {
      state.resetPasswordError = action.payload;
      state.resetPasswordState = State.FAILED;
    },
    clearPrevResetPasswordData(state) {
      state.resetPassword = {};
      state.resetPasswordError = null;
      state.resetPasswordState = State.NOT_PROCESSED;
    },
    getProfileStart(state) {
      state.myProfileState = State.PROCESSING;
    },
    getProfileDone(state, action) {
      state.myProfile = action.payload;
      state.myProfileState = State.DONE;
    },
    getProfileFailed(state, action) {
      state.myProfileError = action.payload;
      state.myProfileState = State.FAILED;
    },
    setSafeAreaSize(state, action) {
      state.safeAreaSize = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logoutDone(state) {
      state.loginData = null;
      state.loginError = null;
      state.loginState = State.NOT_PROCESSED;
      state.safeAreaSize = {};
      state.register = {};
      state.registerError = null;
      state.registerState = State.NOT_PROCESSED;
      state.resetPassword = {};
      state.resetPasswordError = null;
      state.resetPasswordState = State.NOT_PROCESSED;
      state.myProfile = {};
      state.myProfileError = null;
      state.myProfileState = State.NOT_PROCESSED;
      state.token = undefined;
    },
    setUserIsValid(state, action) {
      state.userIsValid = action.payload;
    },
    setErrorMessageColor(state, action) {
      state.errorMessageColor = action.payload;
    },
  },
});

export const UserSlice = slice;
export const {
  loginStart,
  loginDone,
  loginFailed,
  setSafeAreaSize,
  setErrorMessageColor,
  registerStart,
  registerDone,
  registerFailed,
  resetPasswordStart,
  resetPasswordDone,
  resetPasswordFailed,
  getProfileStart,
  getProfileDone,
  getProfileFailed,
  setToken,
  clearPrevRegisterStudentData,
  clearPrevResetPasswordData,
  logoutDone,
  setUserIsValid,
} = slice.actions;
