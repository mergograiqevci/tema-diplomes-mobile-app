import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
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
  deleteQuestionButton: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: Colors.appBaseColor,
    alignSelf: "flex-end",
  },
  newQuestionButton: {
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: Colors.appBaseColor,
    width: "40%",
    alignSelf: "flex-end",
  },
  newQuestionText: {
    color: Colors.white,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 13,
    // fontFamily: "Montserrat-SemiBold",
  },
  saveButtonText: {
    color: Colors.white,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    // fontFamily: "Montserrat-SemiBold",
  },
});
