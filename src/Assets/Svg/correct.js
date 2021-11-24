import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function Correct(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={34} height={34} rx={17} fill="green" fillOpacity={0.4} />
      <Path
        d="M14.398 19.977a1 1 0 01-1.596 0l-2.604-3.448a1 1 0 00-1.596 0l-.147.195a1 1 0 000 1.205l4.347 5.755a1 1 0 001.596 0L25.145 9.456a1 1 0 000-1.205l-.147-.195a1 1 0 00-1.596 0l-9.004 11.92z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Correct;
