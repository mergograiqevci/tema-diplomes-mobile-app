import React from "react";
import { View, Text } from "react-native";
import Styles from "./styles";
const ProfileDetails = ({ item }) => {
  return (
    <View style={Styles.singleItemView}>
      <Text style={Styles.valueTitle}>{item.length}</Text>
      <Text style={Styles.name}>{item.title}</Text>
    </View>
  );
};

export default ProfileDetails;
