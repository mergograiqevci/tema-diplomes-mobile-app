import moment from "moment";
import Colors from "~/Assets/Colors";
const formatQuizTaken = (quizTaken, role) => {
  const currentTimeInMilliSeconds = moment().utc().valueOf();

  let completed = [];
  let failed = [];
  let pending = [];
  for (let i = 0; i < quizTaken.length; i++) {
    const dateInMilliSeconds = moment(quizTaken[i]?.quiz?.date).utc().valueOf();
    if (role === "professor") {
      if (dateInMilliSeconds >= currentTimeInMilliSeconds) {
        pending.push({ ...quizTaken[i], backgroundColor: Colors.pendingQuiz });
      } else {
        completed.push({
          ...quizTaken[i],
          backgroundColor: Colors.appBaseColor,
        });
      }
    } else {
      if (!quizTaken[i]?.grade) {
        if (quizTaken[i]?.points) {
          pending.push({
            ...quizTaken[i],
            backgroundColor: Colors.pendingQuiz,
          });
        } else {
          failed.push({ ...quizTaken[i], backgroundColor: Colors.negative });
        }
      } else {
        if (quizTaken[i]?.grade.toString() === "5") {
          failed.push({ ...quizTaken[i], backgroundColor: Colors.negative });
        } else {
          completed.push({
            ...quizTaken[i],
            backgroundColor: Colors.appBaseColor,
          });
        }
      }
    }
  }
  return { completed, failed, pending };
};

export default formatQuizTaken;
