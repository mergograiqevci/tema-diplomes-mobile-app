import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function Trophy(props) {
  return (
    <Svg
      width={76}
      height={78}
      viewBox="0 0 76 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H76V78H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_6_1247"
            transform="matrix(.01604 0 0 .01563 -.013 0)"
          />
        </Pattern>
        <Image
          id="image0_6_1247"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default Trophy;
