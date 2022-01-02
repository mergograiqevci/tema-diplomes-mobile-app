import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DeleteIcon(props) {
  return (
    <Svg
      width={13}
      height={13}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.56 12L5.52 7.744 2.512 12H.144l4.16-5.712L.368.8H2.72l2.864 3.984L8.416.8h2.256l-3.92 5.408L10.96 12h-2.4z"
        fill="#fff"
      />
    </Svg>
  );
}

export default DeleteIcon;
