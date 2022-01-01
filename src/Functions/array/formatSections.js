import formatQuizTaken from "./formatQuizTaken";
const formatSections = (formatedToDo, role) => {
  const allSections = [];

  formatedToDo.todayTasks &&
    formatedToDo.todayTasks.length > 0 &&
    allSections.push({
      title: "Sot",
      data: formatedToDo.todayTasks,
      key: "todayTasks",
    });

  formatedToDo.otherTasks &&
    formatedToDo.otherTasks.length > 0 &&
    allSections.push({
      title:
        formatedToDo.todayTasks && formatedToDo.todayTasks.length > 0
          ? "Detyra te tjera"
          : "Detyrat",
      data: formatedToDo.otherTasks,
      key: "otherTasks",
    });

  formatedToDo.groups &&
    formatedToDo.groups.length > 0 &&
    allSections.push({
      title: "Grupet",
      data: formatedToDo.groups,
      key: "groups",
    });

  const quizTaken = formatQuizTaken(formatedToDo?.quizTaken, role);

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
      title: role === "professor" ? "Ne te ardhmen" : "Duke Pritur",
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
