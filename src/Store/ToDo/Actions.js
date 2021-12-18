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
          const formatedToDo = formatToDo(res?.data);
          // console.log("formatedToDo", formatedToDo);
          const formatedSections = formatSections(formatedToDo);
          // console.log("formatedSections", formatedSections);
          dispatch(ToDoReducers.getToDoDone(formatedSections));
        })
        .catch((err) => {
          console.log("err", err);
          dispatch(ToDoReducers.getToDoFailed(err));
        });
    };
  }
}

export default ToDoActions;
