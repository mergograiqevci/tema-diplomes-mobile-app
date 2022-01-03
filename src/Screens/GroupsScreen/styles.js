import { StyleSheet, Dimensions } from "react-native";
import Colors from "~/Assets/Colors";
const { height } = Dimensions.get("window");
export default StyleSheet.create({
  notFoundView: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.gray,
    marginTop: -200,
  },
});
