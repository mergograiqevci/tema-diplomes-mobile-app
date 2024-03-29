import * as API from "~/API";
import * as ToDoReducers from "./Reducers";
import formatToDo from "~/Functions/array/formatToDo";
import formatSections from "~/Functions/array/formatSections";
import formatQuizStyle from "~/Functions/array/formatQuizStyle";
import openSocket from "socket.io-client";
import Config from "~/Config";
import toasterMessage from "~/Functions/toaster/toasterMessage";
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
          const formatedSections = formatSections(formatedToDo, role);
          dispatch(ToDoReducers.getToDoDone(formatedSections));
        })
        .catch((err) => {
          dispatch(ToDoReducers.getToDoFailed(err));
        });
    };
  }
  static completeTask(request, handleRedirectOnResponse) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(ToDoReducers.completeQuizStart());
      API.ToDo.completeTask(token, request)
        .then((res) => {
          dispatch(ToDoReducers.completeQuizDone(res));
          dispatch(this.getToDo());
          handleRedirectOnResponse && handleRedirectOnResponse("success", res);
        })
        .catch((err) => {
          handleRedirectOnResponse && handleRedirectOnResponse("error");
          dispatch(ToDoReducers.completeQuizFailed(err));
        });
      const socket = openSocket(Config.Server.API_BASE_URL);
      socket.on("quiz", (data) => {
        const jsonData = JSON.parse(JSON.stringify(data));
        if (jsonData.action === `completed-${request?.task_id}`) {
          dispatch(ToDoReducers.completedQuizStudentResult([jsonData]));
        }
      });
    };
  }
  static getOtherStudentQuizResult(task_id) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      let otherStudentData = [];
      API.ToDo.getOtherStudentQuizResult(token, task_id)
        .then((res) => {
          const d = [...res?.data];
          d.map((i) => {
            otherStudentData.push(i);
          });
          dispatch(ToDoReducers.completedQuizStudentResult(otherStudentData));
        })
        .catch((err) => {
          toasterMessage(
            err ? err : "Ndodhi një gabim gjatë leximit të rezultateve",
            "error"
          );
        });
    };
  }

  static clearPrevQuizCompleted() {
    return (dispatch) => {
      dispatch(ToDoReducers.clearPrevQuizCompleted());
    };
  }
  static canCompleteQuiz(quiz_id, group_id, redirectToQuiz) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      let request = { quiz_id };
      group_id && Object.assign(request, { group_id });
      dispatch(ToDoReducers.canCompleteQuizStart());
      API.ToDo.canCompleteQuiz(token, request)
        .then((res) => {
          redirectToQuiz();
          dispatch(ToDoReducers.canCompleteQuizDone(res));
        })
        .catch((err) => {
          dispatch(ToDoReducers.canCompleteQuizFailed({ ...err, quiz_id }));
        });
    };
  }
  static clearPrevCanCompleteQuiz() {
    return (dispatch) => {
      dispatch(ToDoReducers.clearPrevCanCompleteQuiz());
    };
  }
  static getQuizResult(id, handleQuizAnswerResponse) {
    return (dispatch, getState) => {
      const token = getState()?.User?.token;
      dispatch(ToDoReducers.getQuizResultStart());
      API.ToDo.getQuizResult(token, id)
        .then((res) => {
          const formatedQuizStyle = formatQuizStyle(
            res?.data?.completed_result
          );
          dispatch(ToDoReducers.getQuizResultDone(formatedQuizStyle));
          handleQuizAnswerResponse && handleQuizAnswerResponse("success");
        })
        .catch((err) => {
          console.log("ERRORI", err);
          handleQuizAnswerResponse && handleQuizAnswerResponse("error");

          dispatch(ToDoReducers.getQuizResultFailed(err));
        });
    };
  }
}

export default ToDoActions;
