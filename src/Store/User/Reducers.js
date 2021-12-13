import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";

const initialState = {
  data: null,
  loginError: null,
  dataState: State.NOT_PROCESSED,
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
};

const slice = createSlice({
  name: "User",
  initialState,
  reducers: {
    loginStart(state) {
      state.dataState = State.PROCESSING;
    },
    loginDone(state, action) {
      state.data = action.payload;
      state.dataState = State.DONE;
    },
    loginFailed(state, action) {
      state.loginError = action.payload;
      state.dataState = State.FAILED;
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
  },
});

export const UserSlice = slice;
export const {
  loginStart,
  loginDone,
  loginFailed,
  setSafeAreaSize,
  registerStart,
  registerDone,
  registerFailed,
  resetPasswordStart,
  resetPasswordDone,
  resetPasswordFailed,
  getProfileStart,
  getProfileDone,
  getProfileFailed,
} = slice.actions;
