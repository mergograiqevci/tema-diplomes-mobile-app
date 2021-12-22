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
  const findBookGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "book"
  );
  const quiz =
    unFormatedToDoData?.studentTasks?.length +
    unFormatedToDoData?.groupTasks?.length -
    findBookStudentTask?.length +
    findBookGroupTask?.length -
    findVideoStudentTask?.length +
    findVideoGroupTask?.length;
  return [
    {
      title: "Grupe",
      length: unFormatedToDoData?.groups?.length,
    },
    {
      title: "Kuize",
      length: quiz,
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
