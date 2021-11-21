import React from "react";
import { TouchableOpacity } from "react-native";
const IconHolder = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};
export default IconHolder;
