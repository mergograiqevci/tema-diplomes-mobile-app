import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";

const initialState = {
  quizStudentsResultData: [],
  quizStudentsResultError: null,
  quizStudentsResultState: State.NOT_PROCESSED,
  gradeTaskState: State.NOT_PROCESSED,
  gradeTaskData: [],
  gradeTaskError: null,
  createNewTaskError: null,
  createNewTaskState: State.NOT_PROCESSED,
  createNewTaskData: {},
  deleteTaskError: null,
  deleteTaskState: State.NOT_PROCESSED,
  deleteTaskData: {},
  studentsByQuiz: {},
};

const slice = createSlice({
  name: "Group",
  initialState,
  reducers: {
    getQuizStudentsResultStart(state) {
      state.quizStudentsResultState = State.PROCESSING;
    },
    getQuizStudentsResultDone(state, action) {
      state.quizStudentsResultData = action.payload;
      state.quizStudentsResultState = State.DONE;
    },
    getQuizStudentsResultFailed(state, action) {
      state.quizStudentsResultError = action.payload;
      state.quizStudentsResultState = State.FAILED;
    },
    setGradeTaskStart(state) {
      state.gradeTaskState = State.PROCESSING;
    },
    setGradeTaskDone(state, action) {
      state.gradeTaskData = action.payload;
      state.gradeTaskState = State.DONE;
    },
    setGradeTaskFailed(state, action) {
      state.gradeTaskError = action.payload;
      state.gradeTaskState = State.FAILED;
    },
    createNewTaskStart(state) {
      state.createNewTaskState = State.PROCESSING;
    },
    createNewTaskDone(state, action) {
      state.createNewTaskData = action.payload;
      state.createNewTaskState = State.DONE;
    },
    createNewTaskFailed(state, action) {
      state.createNewTaskError = action.payload;
      state.createNewTaskState = State.FAILED;
    },
    deleteTaskStart(state) {
      state.deleteTaskState = State.PROCESSING;
    },
    deleteTaskDone(state, action) {
      state.deleteTaskData = action.payload;
      state.deleteTaskState = State.DONE;
    },
    deleteTaskFailed(state, action) {
      state.deleteTaskError = action.payload;
      state.deleteTaskState = State.FAILED;
    },
    setStudentsByQuiz(state, action) {
      state.studentsByQuiz = action.payload;
    },
  },
});

export const TaskSlice = slice;
export const {
  getQuizStudentsResultStart,
  getQuizStudentsResultDone,
  getQuizStudentsResultFailed,
  setGradeTaskStart,
  setGradeTaskDone,
  setGradeTaskFailed,
  createNewTaskStart,
  createNewTaskDone,
  createNewTaskFailed,
  deleteTaskStart,
  deleteTaskDone,
  deleteTaskFailed,
  setStudentsByQuiz,
} = slice.actions;
