const removeDuplicatedStudents = (students) => {
  let removeDuplicated = [];
  for (let i = 0; i < students.length; i++) {
    const findStudent = removeDuplicated.find(
      (s) =>
        s?.student?._id?.toString() === students[i]?.student?._id?.toString()
    );
    if (!findStudent) {
      removeDuplicated.push(students[i]);
    }
  }
  return removeDuplicated;
};

export default removeDuplicatedStudents;
