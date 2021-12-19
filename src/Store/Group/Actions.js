import * as API from "~/API";
import * as GroupReducers from "./Reducers";
import * as ToDoReducers from "../ToDo/Reducers";
import removeGroupInToDo from "~/Functions/array/removeGroupInToDo";
class GroupActions {
  static leaveGroup(id) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      const toDoData = getState()?.ToDo?.toDoData;
      dispatch(ToDoReducers.getToDoStart());
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
}

export default GroupActions;
