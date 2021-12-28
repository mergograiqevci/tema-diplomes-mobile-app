import React from "react";
import { View, Text } from "react-native";
import Colors from "~/Assets/Colors";
import { useSelector } from "react-redux";
const SectionHeader = ({ title }) => {
  const safeAreaSize = useSelector((state) => state.User?.safeAreaSize);
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "700",
        color: Colors.gray,
        paddingVertical: 10,
        paddingLeft: 15,
        height: safeAreaSize.top,
      }}
    >
      {title}
    </Text>
  );
};

export default SectionHeader;
