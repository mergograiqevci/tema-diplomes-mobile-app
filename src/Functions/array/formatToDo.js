import findInCompletedTasks from "./findInCompletedTasks";
import isTodayDay from "../isTodayDay";
import moment from "moment";
import Colors from "~/Assets/Colors";
const formatToDo = (toDo) => {
  let quizTaken = [...toDo?.quizTaken];
  // let tasks = findInCompletedTasks("isTask", toDo?.studentTasks, quizTaken);
  let tasks = findInCompletedTasks("isTask", toDo?.groupTasks, quizTaken);
  // groupTasks &&
  //   groupTasks.length > 0 &&
  //   groupTasks.map((task) => tasks.push(task));

  const currentTimeInMilliSeconds = moment().utc().valueOf();

  let todayTasks = [];
  let otherTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i]?.type === "quiz") {
      const dateInMilliSeconds = moment(tasks[i]?.quiz?.date).utc().valueOf();
      if (dateInMilliSeconds >= currentTimeInMilliSeconds) {
        if (isTodayDay(tasks[i]?.quiz?.date)) {
          todayTasks.push(tasks[i]);
        } else {
          otherTasks.push(tasks[i]);
        }
      } else {
        quizTaken.push(tasks[i]);
      }
    } else {
      otherTasks.push(tasks[i]);
    }
  }

  return {
    todayTasks,
    otherTasks,
    groups: toDo?.groups.map((i) => ({
      ...i,
      isGroup: true,
      backgroundColor: Colors.groupBackground,
    })),
    quizTaken,
  };
};

export default formatToDo;
