import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Password(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 7.429H3c-.789 0-1.429.64-1.429 1.428v5c0 .79.64 1.429 1.429 1.429h10c.789 0 1.429-.64 1.429-1.429v-5c0-.789-.64-1.428-1.429-1.428z"
        stroke="#87ACBF"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.429 7.429V4.57a3.571 3.571 0 117.142 0V7.43"
        stroke="#87ACBF"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Password;
