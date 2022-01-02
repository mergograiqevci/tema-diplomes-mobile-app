const findGroupTasks = (toDo, id) => {
  let td = [];

  toDo.map((t) => {
    if (t.key !== "groups") {
      const d = t?.data;
      const filtered = d.filter(
        (i) => i?.group?._id === id || i?.quiz?.group === id
      );
      filtered && filtered.length > 0 && td.push({ ...t, data: filtered });
    }
  });

  return td;
};

export default findGroupTasks;
