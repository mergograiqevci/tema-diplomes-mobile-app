import Colors from "~/Assets/Colors";
const formatQuizStyle = (quizData) => {
  // let quizData = [...quiz];

  for (let i = 0; i < quizData.length; i++) {
    const options = quizData[i]?.options;
    const your_answer = quizData[i]?.your_answer;
    const correct_answer = quizData[i]?.correct_answer;
    for (let j = 0; j < options.length; j++) {
      let style = {};
      let inYourAnswer = your_answer.find((o) => o === options[j]);
      if (inYourAnswer) {
        if (correct_answer.find((c) => c === inYourAnswer)) {
          style = { backgroundColor: Colors.green };
        } else {
          style = { backgroundColor: Colors.negative };
        }
      } else if (correct_answer.find((o) => o === options[j])) {
        style = { borderRadius: Colors.green };
      } else {
        style = { empty: true };
      }
      quizData[i].options[j] = { v: options[j], style };
    }
  }
  return quizData;
};

export default formatQuizStyle;
