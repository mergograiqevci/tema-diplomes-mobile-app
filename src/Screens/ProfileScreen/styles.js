import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  title: {
    color: Colors.black,
    marginTop: 30,
    marginBottom: -15,
    fontSize: 20,
    marginLeft: 25,
  },
  accountButton: {
    paddingVertical: 13,
    borderRadius: 8,
    marginHorizontal: 60,
    backgroundColor: Colors.appBaseColor,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  accountButtonText: {
    color: Colors.white,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
});
