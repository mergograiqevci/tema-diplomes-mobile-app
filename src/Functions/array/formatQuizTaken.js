import moment from "moment";
const formatQuizTaken = (quizTaken, role) => {
  const currentTimeInMilliSeconds = moment().utc().valueOf();

  let completed = [];
  let failed = [];
  let pending = [];
  for (let i = 0; i < quizTaken.length; i++) {
    const dateInMilliSeconds = moment(quizTaken[i]?.quiz?.date).utc().valueOf();
    if (role === "professor") {
      if (dateInMilliSeconds >= currentTimeInMilliSeconds) {
        pending.push(quizTaken[i]);
      } else {
        completed.push(quizTaken[i]);
      }
    } else {
      if (!quizTaken[i]?.grade) {
        failed.push({ ...quizTaken[i], grade: "-1" });
      } else {
        if (quizTaken[i]?.grade === null) {
          pending.push(quizTaken[i]);
        } else {
          if (quizTaken[i]?.grade.toString() === "5") {
            failed.push(quizTaken[i]);
          } else {
            completed.push(quizTaken[i]);
          }
        }
      }
    }
  }
  return { completed, failed, pending };
};

export default formatQuizTaken;
