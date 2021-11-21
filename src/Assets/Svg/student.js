import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function Student(props) {
  return (
    <Svg
      width={50}
      height={48}
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H50V48H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_6_1576"
            transform="matrix(.01563 0 0 .01628 0 -.02)"
          />
        </Pattern>
        <Image
          id="image0_6_1576"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default Student;
