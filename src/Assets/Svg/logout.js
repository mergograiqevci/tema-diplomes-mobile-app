import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Logout(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 19H3a2 2 0 01-2-2V3a2 2 0 012-2h4M14 15l5-5-5-5M19 10H7"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Logout;
