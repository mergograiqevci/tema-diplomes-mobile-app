const formatToDoStatistic = (unFormatedToDoData, professor) => {
  const findVideoGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "video"
  );
  const findBookGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "book"
  );
  const findQuizGroupTask = unFormatedToDoData?.groupTasks.filter(
    (i) => i.type === "quiz"
  );

  if (professor) {
    let totalStudents = 0;
    unFormatedToDoData?.groups.map(
      (i) => (totalStudents += parseInt(i?.number_of_students))
    );
    return [
      {
        title: "Grupe",
        length: unFormatedToDoData?.groups?.length,
      },
      {
        title: "Student",
        length: totalStudents,
      },
      {
        title: "Detyrat",
        length:
          findQuizGroupTask?.length +
          findBookGroupTask?.length +
          findVideoGroupTask?.length,
      },
    ];
  } else {
    return [
      {
        title: "Grupe",
        length: unFormatedToDoData?.groups?.length,
      },
      {
        title: "Kuize",
        length: findQuizGroupTask?.length,
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
  }
};

export default formatToDoStatistic;
