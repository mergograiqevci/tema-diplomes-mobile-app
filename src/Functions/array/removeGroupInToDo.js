const removeGroupInToDo = (toDoData) => {
  let toUpdateToDo = [...toDoData];
  const groupsInToDoIndex = toUpdateToDo?.findIndex((i) => i.key === "groups");
  if (groupsInToDoIndex !== -1) {
    let removedGroup = toUpdateToDo[groupsInToDoIndex].data.filter(
      (g) => g._id !== id
    );
    toUpdateToDo[groupsInToDoIndex] = {
      ...toUpdateToDo[groupsInToDoIndex],
      data: removedGroup,
    };
  }
  return toUpdateToDo;
};

export default removeGroupInToDo;
