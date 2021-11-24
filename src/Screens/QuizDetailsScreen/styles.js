import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  headerView: {
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    color: Colors.gray,
    fontWeight: "700",
  },
});
