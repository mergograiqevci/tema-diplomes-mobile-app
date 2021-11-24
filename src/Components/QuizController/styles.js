import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width * 0.85,
    alignSelf: "center",
    paddingVertical: 23,
    alignItems: "center",
    borderRadius: 9,
    marginVertical: 5,
  },
  text: {
    position: "absolute",
    width: "95%",
    marginHorizontal: "2.5%",
    fontWeight: "700",
    fontSize: width / 28,
  },
});
