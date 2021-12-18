const formatQuizTaken = (quizTaken) => {
  let completed = [];
  let failed = [];
  let pending = [];
  for (let i = 0; i < quizTaken.length; i++) {
    if (quizTaken[i].grade === null) {
      pending.push(quizTaken[i]);
    } else {
      if (quizTaken[i].grade.toString() === "5") {
        failed.push(quizTaken[i]);
      } else {
        completed.push(quizTaken[i]);
      }
    }
  }
  return { completed, failed, pending };
};

export default formatQuizTaken;
