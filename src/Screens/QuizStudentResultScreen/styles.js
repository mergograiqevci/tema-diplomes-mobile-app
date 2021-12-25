import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 23,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.gray,
  },
});
