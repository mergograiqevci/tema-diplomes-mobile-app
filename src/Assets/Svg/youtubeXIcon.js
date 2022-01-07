import * as React from "react";
import Svg, { Path } from "react-native-svg";

function YoutubeXIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.5 7.5l-15 15M7.5 7.5l15 15"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default YoutubeXIcon;
