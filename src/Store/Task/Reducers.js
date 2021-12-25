import { createSlice } from "@reduxjs/toolkit";
import State from "~/Store/State";

const initialState = {
  quizStudentsResultData: [],
  quizStudentsResultError: null,
  quizStudentsResultState: State.NOT_PROCESSED,
  gradeTaskState: State.NOT_PROCESSED,
  gradeTaskData: [],
  gradeTaskError: null,
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
} = slice.actions;
