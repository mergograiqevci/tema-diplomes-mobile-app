const findInCompletedTasks = (type, data, completedTasks) => {
  let inCompletedTasks = [];
  for (let i = 0; i < data.length; i++) {
    const findCompletedTask = completedTasks.find(
      (q) => q?.task?._id.toString() === data[i]?._id.toString()
    );

    if (findCompletedTask?.type === "book") {
      if (
        findCompletedTask?.book?.page !== findCompletedTask?.book?.total_page
      ) {
        let book = { ...data[i].book };
        let fBook = { ...findCompletedTask?.book };
        Object.keys(fBook).forEach(function (key) {
          Object.assign(book, { [key]: fBook[key] });
        });

        inCompletedTasks.push({
          ...data[i],
          pivot_id: findCompletedTask?._id,
          book,
          [type]: true,
        });
      }
    }
    if (findCompletedTask?.type === "video") {
      if (findCompletedTask?.video?.completed === false) {
        inCompletedTasks.push({ ...data[i], [type]: true });
      }
    }
    if (!findCompletedTask) {
      inCompletedTasks.push({ ...data[i], [type]: true });
    }
  }
  return inCompletedTasks;
};

export default findInCompletedTasks;
