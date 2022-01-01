import React from "react";
import { View, ActivityIndicator } from "react-native";
import Colors from "~/Assets/Colors";
const Loading = ({ animating }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <ActivityIndicator
        color={Colors.appBaseColor}
        size={"large"}
        animating={animating}
      />
    </View>
  );
};

export default Loading;
