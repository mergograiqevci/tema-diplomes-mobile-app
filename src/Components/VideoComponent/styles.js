import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  videoContainer: {
    width: width,
    height: height,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  youtubeVideoStyle: {
    marginTop: height / 3,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
  normalVideoStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
