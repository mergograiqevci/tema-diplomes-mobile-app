const formatToDoStatistic = (unFormatedToDoData) => {
  const findVideoStudentTask = unFormatedToDoData?.studentTasks.filter(
    (i) => i.type === "video"
  );
  const findVideoGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "video"
  );
  const findBookStudentTask = unFormatedToDoData?.studentTasks.filter(
    (i) => i.type === "book"
  );
  const findQuizStudenTask = unFormatedToDoData?.studentTasks.filter(
    (i) => i.type === "quiz"
  );
  const findBookGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "book"
  );
  const findQuizGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "quiz"
  );
  return [
    {
      title: "Grupe",
      length: unFormatedToDoData?.groups?.length,
    },
    {
      title: "Kuize",
      length: findQuizStudenTask.length + findQuizGroupTask.length,
    },
    {
      title: "Libra",
      length: findBookStudentTask?.length + findBookGroupTask?.length,
    },
    {
      title: "Video",
      length: findVideoStudentTask?.length + findVideoGroupTask?.length,
    },
  ];
};

export default formatToDoStatistic;
