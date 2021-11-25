import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Home(props) {
  return (
    <Svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.635 18.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1A3.41 3.41 0 0019 16.579V7.867c0-.735-.328-1.431-.895-1.902L11.434.675a3.097 3.097 0 00-3.949.072L.967 5.965A2.474 2.474 0 000 7.867v8.702C0 18.464 1.547 20 3.456 20h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"
        fill={props.color}
      />
    </Svg>
  );
}

export default Home;
