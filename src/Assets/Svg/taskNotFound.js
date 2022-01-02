import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function TaskNotFound(props) {
  return (
    <Svg
      width={200}
      height={200}
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H350V350H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_223_1311" transform="scale(.00195)" />
        </Pattern>
        <Image
          id="image0_223_1311"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default TaskNotFound;
