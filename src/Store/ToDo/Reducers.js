import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";

const initialState = {
  toDoData: [],
  unFormatedToDoData: [],
  toDoError: null,
  toDoState: State.NOT_PROCESSED,
  completeQuizData: {},
  completeQuizError: null,
  completeQuizState: State.NOT_PROCESSED,
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
    completeQuizStart(state) {
      state.completeQuizState = State.PROCESSING;
    },
    completeQuizDone(state, action) {
      state.completeQuizData = action.payload;
      state.completeQuizState = State.DONE;
    },
    completeQuizFailed(state, action) {
      state.completeQuizError = action.payload;
      state.completeQuizState = State.FAILED;
    },
    unFormatedToDo(state, action) {
      state.unFormatedToDoData = action.payload;
    },
    clearPrevQuizCompleted(state) {
      state.completeQuizData = {};
      state.completeQuizError = null;
      state.completeQuizState = State.NOT_PROCESSED;
    },
  },
});

export const ToDoSlice = slice;
export const {
  getToDoStart,
  getToDoDone,
  getToDoFailed,
  unFormatedToDo,
  completeQuizStart,
  completeQuizDone,
  completeQuizFailed,
  clearPrevQuizCompleted,
} = slice.actions;
