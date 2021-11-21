import React from "react";
import { View, Text } from "react-native";
import Header from "~/Components/Header";
import ArrowLeft from "~/Assets/Svg/arrowLeft";
import Colors from "~/Assets/Colors";
const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        title="Chapter 1"
        leftIcon={<ArrowLeft />}
        handleLeftIcon={() => navigation.goBack()}
        safeAreaBackgroundColor={Colors.appBaseColor}
        backgroundColor={Colors.appBaseColor}
        height={50}
      />

      <Text></Text>
    </View>
  );
};

export default ProfileScreen;
