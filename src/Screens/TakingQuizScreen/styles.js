import { StyleSheet, Dimensions } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.appBaseColor,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.white,
  },
  questionView: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.white,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 25,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  footerView: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
  },
  buttonView: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logoutFromQuizText: {
    fontSize: 17,
    fontWeight: "400",
    color: Colors.white,
    alignSelf: "center",
    marginLeft: 10,
  },
  continueQuizText: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.white,
    alignSelf: "center",
  },
  continueQuizButton: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9,
    backgroundColor: Colors.blue,
  },
});
