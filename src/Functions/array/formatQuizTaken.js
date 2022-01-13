import moment from "moment";
import Colors from "~/Assets/Colors";
const formatQuizTaken = (quizTaken, role) => {
  const currentTimeInMilliSeconds = moment().utc().valueOf();

  let completed = [];
  let failed = [];
  let pending = [];

  const formatQuiz = (object) => {
    if (!object?.quiz?.grade) {
      if (object?.quiz?.points) {
        pending.push({
          ...object,
          backgroundColor: Colors.pendingQuiz,
        });
      } else {
        failed.push({
          ...object,
          backgroundColor: Colors.negative,
          grade: "-0",
        });
      }
    } else {
      if (object?.quiz?.grade.toString() === "5") {
        failed.push({ ...object, backgroundColor: Colors.negative });
      } else {
        completed.push({
          ...object,
          backgroundColor: Colors.appBaseColor,
        });
      }
    }
  };

  const formatBook = (object) => {
    if (object?.book?.page === object?.book?.total_page) {
      completed.push({
        ...object,
        backgroundColor: Colors.appBaseColor,
      });
    }
  };

  const formatVideo = (object) => {
    if (object?.video?.completed === true) {
      completed.push({
        ...object,
        backgroundColor: Colors.appBaseColor,
      });
    }
  };

  for (let i = 0; i < quizTaken.length; i++) {
    if (role === "professor") {
      if (quizTaken[i]?.type === "quiz") {
        const dateInMilliSeconds = moment(quizTaken[i]?.quiz?.date)
          .utc()
          .valueOf();
        if (dateInMilliSeconds >= currentTimeInMilliSeconds) {
          pending.push({
            ...quizTaken[i],
            backgroundColor: Colors.pendingQuiz,
          });
        } else {
          completed.push({
            ...quizTaken[i],
            backgroundColor: Colors.appBaseColor,
          });
        }
      }
    } else {
      if (quizTaken[i]?.type === "quiz") {
        formatQuiz(quizTaken[i]);
      } else if (quizTaken[i]?.type === "book") {
        formatBook(quizTaken[i]);
      } else if (quizTaken[i]?.type === "video") {
        formatVideo(quizTaken[i]);
      }
    }
  }
  return { completed, failed, pending };
};

export default formatQuizTaken;
