import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AddPerson(props) {
  return (
    <Svg
      width={24}
      height={20}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 9a4 4 0 100-8 4 4 0 000 8zM20 6v6M23 9h-6"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AddPerson;
