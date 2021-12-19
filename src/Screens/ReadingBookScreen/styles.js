import { StyleSheet, Dimensions } from "react-native";
import Colors from "~/Assets/Colors";
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  errorText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "700",
    maxWidth: "70%",
    alignSelf: "center",
    color: Colors.negative,
  },
  pdfView: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#F2F2F2",
  },
});
