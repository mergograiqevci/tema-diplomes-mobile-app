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
  canCompleteQuizData: {},
  canCompleteQuizError: null,
  canCompleteQuizState: State.NOT_PROCESSED,
  getQuizResultError: null,
  getQuizResultState: State.NOT_PROCESSED,
  getQuizResultData: {},
  completedQuizStudentData: [],
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
    completedQuizStudentResult(state, action) {
      state.completedQuizStudentData = [
        ...state.completedQuizStudentData,
        action.payload,
      ];
    },
    unFormatedToDo(state, action) {
      state.unFormatedToDoData = action.payload;
    },
    clearPrevQuizCompleted(state) {
      state.completeQuizData = {};
      state.completeQuizError = null;
      state.completeQuizState = State.NOT_PROCESSED;
    },
    canCompleteQuizStart(state) {
      state.canCompleteQuizState = State.PROCESSING;
    },
    canCompleteQuizDone(state, action) {
      state.canCompleteQuizData = action.payload;
      state.canCompleteQuizState = State.DONE;
    },
    canCompleteQuizFailed(state, action) {
      state.canCompleteQuizError = action.payload;
      state.canCompleteQuizState = State.FAILED;
    },
    clearPrevCanCompleteQuiz(state) {
      state.canCompleteQuizData = {};
      state.canCompleteQuizError = null;
      state.canCompleteQuizState = State.NOT_PROCESSED;
    },
    getQuizResultStart(state) {
      state.getQuizResultState = State.PROCESSING;
    },
    getQuizResultDone(state, action) {
      state.getQuizResultData = action.payload;
      state.getQuizResultState = State.DONE;
    },
    getQuizResultFailed(state, action) {
      state.getQuizResultError = action.payload;
      state.getQuizResultState = State.FAILED;
    },
    clearPrevCompletedQuizStudentResult(state) {
      state.completedQuizStudentData = [];
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
  canCompleteQuizStart,
  canCompleteQuizDone,
  canCompleteQuizFailed,
  clearPrevCanCompleteQuiz,
  getQuizResultStart,
  getQuizResultDone,
  getQuizResultFailed,
  completedQuizStudentResult,
  clearPrevCompletedQuizStudentResult,
} = slice.actions;
