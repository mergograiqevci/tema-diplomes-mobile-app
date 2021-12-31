import * as API from "~/API";
import * as TaskReducers from "./Reducers";
import formatQuizResults from "~/Functions/array/formatQuizResults";
class TaskActions {
  static findStudentsByTask(id) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(TaskReducers.getQuizStudentsResultStart());
      API.Task.findStudentsByTask(token, id)
        .then((res) => {
          const formatedResults = formatQuizResults(res?.data);
          dispatch(
            TaskReducers.getQuizStudentsResultDone({
              d: formatedResults,
              totalStudents: res?.data?.length,
            })
          );
        })
        .catch((err) => {
          dispatch(TaskReducers.getQuizStudentsResultFailed(err));
        });
    };
  }
  static gradeTask(request, toasterMessage) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(TaskReducers.setGradeTaskStart());
      API.Task.gradeTask(token, request)
        .then((res) => {
          toasterMessage("Studenti eshte notuar me sukses", "success");
          dispatch(TaskActions.findStudentsByTask(request?.task_id));
          dispatch(TaskReducers.setGradeTaskDone(res));
        })
        .catch((err) => {
          toasterMessage(err?.message, "error");
          dispatch(TaskReducers.setGradeTaskFailed(err));
        });
    };
  }
  static createNewTask(title, type, to, student_or_group_id, task, onResponse) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      const request = { token, title, type, to, student_or_group_id, task };
      dispatch(ToDoReducers.createNewTaskStart());
      API.Task.createNewTask(token, request)
        .then((res) => {
          onResponse("success");
          dispatch(ToDoReducers.createNewTaskDone(res));
        })
        .catch((err) => {
          onResponse("error");
          dispatch(ToDoReducers.createNewTaskFailed(err));
        });
    };
  }
}

export default TaskActions;
