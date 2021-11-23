import * as React from "react";
import Svg, { Path } from "react-native-svg";

function QuizAnswers(props) {
  return (
    <Svg
      width={24}
      height={9}
      viewBox="0 0 24 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 2a2 2 0 012-2h20a2 2 0 110 4H2a2 2 0 01-2-2z"
        fill={props.color}
      />
    </Svg>
  );
}

export default QuizAnswers;
