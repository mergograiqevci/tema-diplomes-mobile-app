import formatQuizTaken from "./formatQuizTaken";
const formatSections = (formatedToDo) => {
  const allSections = [];
  formatedToDo.tasks &&
    formatedToDo.tasks.length > 0 &&
    allSections.push({
      title: "Detyrat",
      data: formatedToDo.tasks,
      key: "tasks",
    });

  formatedToDo.groups &&
    formatedToDo.groups.length > 0 &&
    allSections.push({
      title: "Grupet",
      data: formatedToDo.groups,
      key: "groups",
    });

  const quizTaken = formatQuizTaken(formatedToDo?.quizTaken);

  quizTaken &&
    quizTaken.completed.length > 0 &&
    allSections.push({
      title: "Perfunduara",
      data: quizTaken.completed,
      key: "completed",
    });

  quizTaken &&
    quizTaken.pending.length > 0 &&
    allSections.push({
      title: "Duke Pritur",
      data: quizTaken.pending,
      key: "pending",
    });

  quizTaken &&
    quizTaken.failed.length > 0 &&
    allSections.push({
      title: "Deshtuara",
      data: quizTaken.failed,
      key: "failed",
    });

  return allSections;
};
export default formatSections;
