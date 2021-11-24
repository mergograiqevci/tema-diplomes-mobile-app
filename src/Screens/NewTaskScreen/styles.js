import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 80,
  },
  singleButton: {
    width: "32%",
    marginRight: "1%",
    borderRadius: 9,
  },
  singleButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
  },
  saveButton: {
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: Colors.appBaseColor,
  },
  saveButtonText: {
    color: Colors.white,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    // fontFamily: "Montserrat-SemiBold",
  },
});
