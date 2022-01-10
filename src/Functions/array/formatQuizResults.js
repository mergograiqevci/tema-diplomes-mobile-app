const formatQuizResults = (result) => {
  let fullData = [];
  let gradedStudent = result.filter(
    (s) => parseInt(s?.quiz?.grade) >= 5 && parseInt(s?.quiz?.grade) <= 10
  );
  let unGradedStudent = result.filter((s) => s?.quiz?.grade === null);
  unGradedStudent &&
    unGradedStudent.length > 0 &&
    fullData.push({
      title: "Te Panotuar",
      data: unGradedStudent,
      key: "ungraded",
    });
  gradedStudent &&
    gradedStudent.length > 0 &&
    fullData.push({ title: "Te Notuar", data: gradedStudent, key: "graded" });

  return fullData;
};

export default formatQuizResults;
