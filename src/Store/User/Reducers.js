import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";

const initialState = {
  data: null,
  loginError: null,
  dataState: State.NOT_PROCESSED,
  safeAreaSize: {},
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
    setSafeAreaSize(state, action) {
      state.safeAreaSize = action.payload;
    },
  },
});

export const UserSlice = slice;
export const { loginStart, loginDone, loginFailed, setSafeAreaSize } =
  slice.actions;
