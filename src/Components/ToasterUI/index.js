import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Styles from "./styles";
const ToasterUI = (props) => {
  return (
    <View style={Styles.view}>
      <View
        style={[
          Styles.left,
          {
            backgroundColor:
              props.props.type == "error" ? "#EE2027" : "#2AB268",
          },
        ]}
      />
      <View style={{ marginRight: 10 }}>
        <AntDesign
          name={props.props.type == "error" ? "closecircleo" : "checkcircleo"}
          color={props.props.type == "error" ? "#EE444A" : "#8BCB97"}
          size={30}
        />
      </View>
      <Text style={Styles.text}>{props.props.message}</Text>
      <TouchableOpacity
        style={{ position: "absolute", right: 10 }}
        onPress={props.props.hideToast}
      >
        <AntDesign name="close" color="#858787" size={19} />
      </TouchableOpacity>
    </View>
  );
};

export default ToasterUI;
