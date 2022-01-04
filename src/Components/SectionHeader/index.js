import React from "react";
import { Text } from "react-native";
import Colors from "~/Assets/Colors";
const SectionHeader = ({ title }) => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "700",
        color: Colors.gray,
        paddingVertical: 10,
        paddingLeft: 15,
      }}
    >
      {title}
    </Text>
  );
};

export default SectionHeader;
