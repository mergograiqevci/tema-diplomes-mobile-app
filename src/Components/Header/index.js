import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import IconHolder from "../IconHolder";
import Styles from "./styles";

const Header = ({
  title,
  leftIcon,
  handleLeftIcon,
  rightIcon,
  handleRightIcon,
  safeAreaBackgroundColor,
  backgroundColor,
  height,
}) => {
  return (
    <View style={[Styles.view, { backgroundColor: safeAreaBackgroundColor }]}>
      <SafeAreaView style={{ flex: 0 }} />
      <View
        style={[
          Styles.topBar,
          { backgroundColor: backgroundColor, height: height },
        ]}
      >
        <IconHolder onPress={handleLeftIcon}>{leftIcon}</IconHolder>
        <Text style={Styles.font}>{title}</Text>
        <IconHolder onPress={handleRightIcon}>{rightIcon}</IconHolder>
      </View>
    </View>
  );
};

export default Header;
