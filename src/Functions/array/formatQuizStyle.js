const formatQuizStyle = (quiz, isSingleItem) => {
  let quizD = [...quiz];
  let quizData = isSingleItem ? quizD[0]?.completed_result : quizD;

  // console.log("quizData", quizData[0].completed_result);
  // return;
  for (let i = 0; i < quizData.length; i++) {
    const options = quizData[i]?.options;
    const your_answer = quizData[i]?.your_answer;
    const correct_answer = quizData[i]?.correct_answer;
    for (let j = 0; j < options.length; j++) {
      let style = {};
      let inYourAnswer = your_answer.find((o) => o === options[j]);
      if (inYourAnswer) {
        if (correct_answer.find((c) => c === inYourAnswer)) {
          style = { backgroundColor: "green" };
        } else {
          style = { backgroundColor: "red" };
        }
      } else if (correct_answer.find((o) => o === options[j])) {
        style = { borderRadius: "green" };
      } else {
        style = { empty: true };
      }
      quizData[i].options[j] = { v: options[j], style };
    }
  }
  return quizData;
};

export default formatQuizStyle;
