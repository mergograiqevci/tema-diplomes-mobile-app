import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./styles";
const QuizController = ({
  item,
  textColor,
  backgroundColor,
  borderColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        {
          backgroundColor: backgroundColor,
          borderWidth: borderColor ? 2 : 0,
          borderColor: borderColor && borderColor,
        },
      ]}
      activeOpacity={onPress ? 0 : 1}
      onPress={() => onPress && onPress(item)}
    >
      <Text style={[Styles.text, { textAlign: "left", color: textColor }]}>
        {item.left}
      </Text>
      <Text style={[Styles.text, { textAlign: "center", color: textColor }]}>
        {item.center}
      </Text>
      <Text style={[Styles.text, { textAlign: "right", color: textColor }]}>
        {item.right}
      </Text>
    </TouchableOpacity>
  );
};

export default QuizController;
