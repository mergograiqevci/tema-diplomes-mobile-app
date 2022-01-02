import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function Reload(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H18V18H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_228_1318" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_228_1318"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default Reload;
