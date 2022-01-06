import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function Play(props) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 36 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H36V39H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_230_1312"
            transform="matrix(.01693 0 0 .01563 -.042 0)"
          />
        </Pattern>
        <Image
          id="image0_230_1312"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default Play;
