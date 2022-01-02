import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    position: "absolute",
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  message: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "700",
    color: Colors.gray,
  },
  taskImg: {
    alignItems: "center",
    marginTop: -300,
  },
});
