import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  view: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 0,
  },
  topBar: {
    paddingTop: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    alignItems: "center",
    paddingBottom: 0,
  },
  fakeIconWidth: {
    width: 24,
    height: 24,
  },
  headerView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  font: {
    fontSize: 16,
    // fontFamily: "Montserrat",
    fontWeight: "600",
    color: Colors.white,
  },
});
