import * as React from "react";
import Svg, { Path } from "react-native-svg";

function InCorrect(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 17C0 7.611 7.611 0 17 0s17 7.611 17 17-7.611 17-17 17S0 26.389 0 17z"
        fill="#fff"
        fillOpacity={0.4}
      />
      <Path
        d="M20.06 23l-3.04-4.256L14.012 23h-2.368l4.16-5.712-3.936-5.488h2.352l2.864 3.984 2.832-3.984h2.256l-3.92 5.408L22.46 23h-2.4z"
        fill="#fff"
      />
    </Svg>
  );
}

export default InCorrect;
