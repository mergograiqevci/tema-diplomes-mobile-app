import findInCompletedTasks from "./findInCompletedTasks";
import isTodayDay from "../isTodayDay";
const formatToDo = (toDo) => {
  let tasks = findInCompletedTasks(
    "isTask",
    toDo?.studentTasks,
    toDo?.quizTaken
  );
  let groupTasks = findInCompletedTasks(
    "isTask",
    toDo?.groupTasks,
    toDo?.quizTaken
  );
  groupTasks &&
    groupTasks.length > 0 &&
    groupTasks.map((task) => tasks.push(task));

  let todayTasks = tasks.filter((i) => isTodayDay(i?.quiz?.date));
  let otherTasks = tasks.filter((i) => !isTodayDay(i?.quiz?.date));

  return {
    todayTasks,
    otherTasks,
    groups: toDo?.groups.map((i) => ({ ...i, isGroup: true })),
    quizTaken: toDo?.quizTaken,
  };
};

export default formatToDo;
