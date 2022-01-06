import * as API from "~/API";
import * as GroupReducers from "./Reducers";
import * as ToDoReducers from "../ToDo/Reducers";
import removeGroupInToDo from "~/Functions/array/removeGroupInToDo";
import ToDoActions from "../ToDo/Actions";
import toasterMessage from "~/Functions/toaster/toasterMessage";
import Config from "~/Config";
import removeDuplicatedStudents from "~/Functions/array/removeDuplicatedStudents";
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
          if (
            res?.data === "group_created_successfully_failed_to_insert_students"
          ) {
            toasterMessage(
              "Grupi është krijuar me suksesë por studentët kanë dështuar të regjistrohen",
              "error"
            );
          }
          dispatch(ToDoActions.getToDo());
          dispatch(GroupReducers.createNewGroupDone(res));
        })
        .catch((err) => {
          toasterMessage(
            "Ka ndodhur një gabim gjatë regjistrimit të grupit",
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
          const removedDuplicated = removeDuplicatedStudents(res?.data);
          dispatch(
            GroupReducers.findAllStudentsByProfessorDone(removedDuplicated)
          );
        })
        .catch((err) => {
          dispatch(GroupReducers.findAllStudentsByProfessorFailed(err));
        });
    };
  }
  static insertStudentInGroup(request) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(GroupReducers.insertStudentInGroupStart());
      API.Group.insertStudentInGroup(token, request)
        .then((res) => {
          toasterMessage("Studenti është regjistruar me suksesë", "success");
          dispatch(ToDoActions.getToDo());
          dispatch(GroupReducers.insertStudentInGroupDone(res?.data));
        })
        .catch((err) => {
          console.log("ERRORI:", err);
          let error;
          if (err?.error?.path?.toString() === "_id") {
            error = Config.ErrorMessages["id_not_valid"];
          } else {
            error = Config.ErrorMessages["default_error"];
          }

          toasterMessage(error, "error");
          dispatch(GroupReducers.insertStudentInGroupFailed(err));
        });
    };
  }
}

export default GroupActions;
