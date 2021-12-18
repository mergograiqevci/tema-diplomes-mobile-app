import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";

const initialState = {
  toDoData: [],
  toDoError: null,
  toDoState: State.NOT_PROCESSED,
};

const slice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    getToDoStart(state) {
      state.toDoState = State.PROCESSING;
    },
    getToDoDone(state, action) {
      state.toDoData = action.payload;
      state.toDoState = State.DONE;
    },
    getToDoFailed(state, action) {
      state.toDoError = action.payload;
      state.toDoState = State.FAILED;
    },
  },
});

export const ToDoSlice = slice;
export const { getToDoStart, getToDoDone, getToDoFailed } = slice.actions;
