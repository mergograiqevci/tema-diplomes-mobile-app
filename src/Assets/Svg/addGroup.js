import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AddGroup(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.54 7h3.38c1.41 0 2.54 1.15 2.54 2.561v3.409c0 1.42-1.13 2.56-2.54 2.56H2.54c-1.4 0-2.54-1.14-2.54-2.56V9.561C0 8.15 1.14 7 2.54 7zm0 11.47h3.38c1.41 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.13 2.56-2.54 2.56H2.54C1.14 27 0 25.85 0 24.44v-3.41c0-1.42 1.14-2.56 2.54-2.56zM17.46 7h-3.38c-1.41 0-2.54 1.15-2.54 2.561v3.409c0 1.42 1.13 2.56 2.54 2.56h3.38c1.4 0 2.54-1.14 2.54-2.56V9.561C20 8.15 18.86 7 17.46 7zm-3.38 11.47h3.38c1.4 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.56 2.54-2.56z"
        fill="#fff"
      />
      <Path
        d="M23 1v6M26 4h-6"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AddGroup;
