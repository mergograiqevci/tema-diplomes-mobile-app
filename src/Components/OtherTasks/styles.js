import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 88,
    marginVertical: 5,
    marginHorizontal: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 9,
  },
  title: {
    fontSize: 19,
    fontWeight: "500",
    color: Colors.white,
    maxWidth: "75%",
  },
  subTextView: {
    flexDirection: "column",
    alignItems: "center",
  },
  rightTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  subRightTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  line: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderColor: Colors.white,
  },
});
