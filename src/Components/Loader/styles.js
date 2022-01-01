import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    height: height,
    width: width,
    backgroundColor: "black",
    opacity: 0.65,
    zIndex: 1000,
  },
  loaderView: {
    marginTop: height / 2,
  },
});
