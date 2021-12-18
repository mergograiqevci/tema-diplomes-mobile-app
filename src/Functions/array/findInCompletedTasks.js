const findInCompletedTasks = (type, data, completedTasks) => {
  let inCompletedTasks = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "quiz") {
      const findCompletedTask = completedTasks.find(
        (q) => q.quiz._id.toString() === data[i]._id.toString()
      );
      if (!findCompletedTask) {
        inCompletedTasks.push({ ...data[i], [type]: true });
      }
    } else {
      inCompletedTasks.push({ ...data[i], [type]: true });
    }
  }
  return inCompletedTasks;
};

export default findInCompletedTasks;
