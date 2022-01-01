import React from "react";
import { View, ActivityIndicator } from "react-native";
import Colors from "~/Assets/Colors";
import Styles from "./styles";
const Loader = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.loaderView}>
        <ActivityIndicator
          color={Colors.white}
          size={"large"}
          animating={true}
        />
      </View>
    </View>
  );
};

export default Loader;
