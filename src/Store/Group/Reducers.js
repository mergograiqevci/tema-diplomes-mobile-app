import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";

const initialState = {
  leaveGroupData: [],
  leaveGroupError: null,
  leaveGroupState: State.NOT_PROCESSED,
  createGroupData: [],
  createGroupError: null,
  createGroupState: State.NOT_PROCESSED,
};

const slice = createSlice({
  name: "Group",
  initialState,
  reducers: {
    leaveGroupStart(state) {
      state.leaveGroupState = State.PROCESSING;
    },
    leaveGroupDone(state, action) {
      state.leaveGroupData = action.payload;
      state.leaveGroupState = State.DONE;
    },
    leaveGroupFailed(state, action) {
      state.leaveGroupError = action.payload;
      state.leaveGroupState = State.FAILED;
    },
    clearPrevLeaveGroupData(state) {
      state.leaveGroupData = [];
      state.leaveGroupError = null;
      state.leaveGroupState = State.NOT_PROCESSED;
    },
    createNewGroupStart(state) {
      state.createGroupState = State.PROCESSING;
    },
    createNewGroupDone(state, action) {
      state.createGroupData = action.payload;
      state.createGroupState = State.DONE;
    },
    createNewGroupFailed(state, action) {
      state.createGroupError = action.payload;
      state.createGroupState = State.FAILED;
    },
    clearPrevCreateGroupData(state) {
      state.createGroupData = [];
      state.createGroupError = null;
      state.createGroupState = State.NOT_PROCESSED;
    },
  },
});

export const GroupSlice = slice;
export const {
  leaveGroupStart,
  leaveGroupDone,
  leaveGroupFailed,
  clearPrevLeaveGroupData,
  createNewGroupStart,
  createNewGroupDone,
  createNewGroupFailed,
  clearPrevCreateGroupData,
} = slice.actions;
