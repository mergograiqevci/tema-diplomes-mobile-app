import * as React from "react";
import Svg, { Path } from "react-native-svg";

function User(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.714 13.857V12.43A2.857 2.857 0 009.857 9.57H4.143a2.857 2.857 0 00-2.857 2.858v1.428M7 6.714A2.857 2.857 0 107 1a2.857 2.857 0 000 5.714z"
        stroke={props.color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default User;
