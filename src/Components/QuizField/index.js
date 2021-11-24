import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Styles from "./styles";
import Colors from "~/Assets/Colors";
const Input = ({
  leftIcon,
  placeholder,
  onChangeTextInput,
  value,
  errorMessage,
  keyboardType,
  icon,
  handleIcon,
  secureTextEntry,
  enabled,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View>
      <View style={Styles.inputView}>
        <TextInput
          style={[
            Styles.input,
            {
              opacity: !enabled ? 0.8 : 1,
              borderColor: focused
                ? Colors.activeBorderInput
                : Colors.inActiveBorderInput,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={Colors.inputText}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          value={value && value}
          onChangeText={onChangeTextInput}
          autoCorrect={false}
          spellCheck={false}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          editable={enabled}
          selectTextOnFocus={enabled}
        />
        {icon !== undefined && (
          <TouchableOpacity
            style={[Styles.iconView, { right: 15 }]}
            onPress={handleIcon}
          >
            {icon}
          </TouchableOpacity>
        )}
      </View>
      <View style={[Styles.iconView, { left: 15 }]}>{leftIcon}</View>
      {errorMessage ? (
        <Text style={Styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};
export default Input;
