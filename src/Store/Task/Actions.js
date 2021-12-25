import * as API from "~/API";
import * as TaskReducers from "./Reducers";
// import formatQuizResult from "~/Functions/array/formatQuizResult";
class TaskActions {
  static findStudentsByTask(id) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(TaskReducers.getQuizStudentsResultStart());
      API.Task.findStudentsByTask(token, id)
        .then((res) => {
          let data = [...res?.data];
          const formatedResult = data.sort((a, b) =>
            parseInt(
              a?.points.subString(0, a?.points.indexOf("/")) -
                parseInt(b?.points.subString(0, b?.points.indexOf("/")))
            )
          );
          dispatch(TaskReducers.getQuizStudentsResultDone(formatedResult));
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
          dispatch(TaskReducers.setGradeTaskDone(res));
        })
        .catch((err) => {
          toasterMessage(err?.message, "error");
          dispatch(TaskReducers.setGradeTaskFailed(err));
        });
    };
  }
}

export default TaskActions;
