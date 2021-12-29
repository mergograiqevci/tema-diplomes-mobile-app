import * as API from "~/API";
import * as GroupReducers from "./Reducers";
import * as ToDoReducers from "../ToDo/Reducers";
import removeGroupInToDo from "~/Functions/array/removeGroupInToDo";
import ToDoActions from "../ToDo/Actions";
import toasterMessage from "~/Functions/toaster/toasterMessage";
class GroupActions {
  static leaveGroup(id) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      const toDoData = getState()?.ToDo?.toDoData;
      dispatch(GroupReducers.leaveGroupStart());
      API.Group.leaveGroup(token, id)
        .then((res) => {
          dispatch(ToDoReducers.getToDoDone(removeGroupInToDo(toDoData)));
          dispatch(GroupReducers.leaveGroupDone(res));
        })
        .catch((err) => {
          dispatch(GroupReducers.leaveGroupFailed(err));
        });
    };
  }
  static createNewGroup(title, students) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(GroupReducers.createNewGroupStart());
      API.Group.createNewGroup(token, title, students)
        .then((res) => {
          dispatch(ToDoActions.getToDo());
          dispatch(GroupReducers.createNewGroupDone(res));
        })
        .catch((err) => {
          console.log("ERRORI:", err);
          toasterMessage(
            "Ka ndodhur nje gabim gjate regjistrimit te grupit",
            "error"
          );
          dispatch(GroupReducers.createNewGroupFailed(err));
        });
    };
  }
  static findAllStudentsByProfessor(title) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(GroupReducers.findAllStudentsByProfessorStart());
      API.Group.findAllStudentsByProfessor(token, title)
        .then((res) => {
          dispatch(GroupReducers.findAllStudentsByProfessorDone(res?.data));
        })
        .catch((err) => {
          dispatch(GroupReducers.findAllStudentsByProfessorFailed(err));
        });
    };
  }
}

export default GroupActions;
