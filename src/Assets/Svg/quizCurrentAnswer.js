import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function QuizCurrentAnswer(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={8.5} cy={8.5} r={8.5} fill="#078080" />
      <Circle cx={8.5} cy={8.5} r={8.5} fill="#0F597E" />
      <Circle cx={8.5} cy={8.5} r={5.5} fill="#078080" />
      <Circle cx={8.5} cy={8.5} r={5.5} fill="#fff" />
    </Svg>
  );
}

export default QuizCurrentAnswer;
