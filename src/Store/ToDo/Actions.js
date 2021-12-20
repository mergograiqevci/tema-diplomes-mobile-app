import * as API from "~/API";
import * as ToDoReducers from "./Reducers";
import formatToDo from "~/Functions/array/formatToDo";
import formatSections from "~/Functions/array/formatSections";
class ToDoActions {
  static getToDo() {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(ToDoReducers.getToDoStart());
      API.ToDo.getToDo(token)
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
}

export default ToDoActions;
