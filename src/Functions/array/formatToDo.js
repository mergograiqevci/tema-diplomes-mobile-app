import findInCompletedTasks from "./findInCompletedTasks";
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

  return {
    tasks,
    groups: toDo?.groups.map((i) => ({ ...i, isGroup: true })),
    quizTaken: toDo?.quizTaken,
  };
};

export default formatToDo;
