import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowLeft(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.707 5.293a1 1 0 010 1.414L7.414 11H19a1 1 0 110 2H7.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

export default ArrowLeft;
