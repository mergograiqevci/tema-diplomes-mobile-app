const formatToDoStatistic = (unFormatedToDoData) => {
  const findVideoGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "video"
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
      length: findQuizGroupTask.length,
    },
    {
      title: "Libra",
      length: findBookGroupTask?.length,
    },
    {
      title: "Video",
      length: findVideoGroupTask?.length,
    },
  ];
};

export default formatToDoStatistic;
