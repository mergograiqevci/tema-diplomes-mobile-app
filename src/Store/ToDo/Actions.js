import * as API from "~/API";
import * as ToDoReducers from "./Reducers";
import formatToDo from "~/Functions/array/formatToDo";
import formatSections from "~/Functions/array/formatSections";
import formatQuizStyle from "~/Functions/array/formatQuizStyle";
class ToDoActions {
  static getToDo() {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      const myProfile = getState()?.User?.myProfile;
      const role = myProfile?.data?.role;
      dispatch(ToDoReducers.getToDoStart());
      API.ToDo.getToDo(token, role)
        .then((res) => {
          dispatch(ToDoReducers.unFormatedToDo(res?.data));
          const formatedToDo = formatToDo(res?.data);
          const formatedSections = formatSections(formatedToDo);
          dispatch(ToDoReducers.getToDoDone(formatedSections));
        })
        .catch((err) => {
          console.log("err", err);
          dispatch(ToDoReducers.getToDoFailed(err));
        });
    };
  }
  static completeQuiz(quiz_id, quiz_answers) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(ToDoReducers.completeQuizStart());
      API.ToDo.completeQuiz(token, quiz_id, quiz_answers)
        .then((res) => {
          dispatch(ToDoReducers.completeQuizDone(res));
          dispatch(this.getToDo());
        })
        .catch((err) => {
          dispatch(ToDoReducers.completeQuizFailed(err));
        });
    };
  }
  static clearPrevQuizCompleted() {
    return (dispatch) => {
      dispatch(ToDoReducers.clearPrevQuizCompleted());
    };
  }
  static canCompleteQuiz(quiz_id, redirectToQuiz) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(ToDoReducers.canCompleteQuizStart());
      API.ToDo.canCompleteQuiz(token, quiz_id)
        .then((res) => {
          console.log("DONE :", res);
          redirectToQuiz();
          dispatch(ToDoReducers.canCompleteQuizDone(res));
        })
        .catch((err) => {
          console.log("CANT :", { ...err, quiz_id });

          dispatch(ToDoReducers.canCompleteQuizFailed({ ...err, quiz_id }));
        });
    };
  }
  static clearPrevCanCompleteQuiz() {
    return (dispatch) => {
      dispatch(ToDoReducers.clearPrevCanCompleteQuiz());
    };
  }
  static getQuizResult(id, redirectToAnswer) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(ToDoReducers.getQuizResultStart());
      API.ToDo.getQuizResult(token, id)
        .then((res) => {
          const formatedQuizStyle = formatQuizStyle(
            res?.data?.completed_result
          );
          dispatch(ToDoReducers.getQuizResultDone(formatedQuizStyle));
          redirectToAnswer();
        })
        .catch((err) => {
          console.log("inside qetu eerrr", err);

          dispatch(ToDoReducers.getQuizResultFailed(err));
        });
    };
  }
  ////TASK

  static createNewTask(title, type, to, student_or_group_id, task) {
    console.log(title, type, to, student_or_group_id, task);

    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(ToDoReducers.createNewTaskStart());
      API.ToDo.createNewTask(token, title, type, to, student_or_group_id, task)
        .then((res) => {
          console.log("NEW HEHE:", res);
          dispatch(ToDoReducers.createNewTaskDone(res));
        })
        .catch((err) => {
          console.log("inside qetu eerrr", err);

          dispatch(ToDoReducers.createNewTaskFailed(err));
        });
    };
  }

  create_new_task;
}

export default ToDoActions;
