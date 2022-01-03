import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.appBaseColor,
    flex: 1,
    alignItems: "center",
  },
  resultText: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.white,
    alignSelf: "center",
    marginBottom: 25,
  },
  buttonView: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  endButtonText: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.white,
    alignSelf: "center",
  },
  endButton: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 9,
    backgroundColor: Colors.negative,
  },
  congratsText: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.white,
    alignSelf: "center",
    marginTop: 70,
  },
  congratsDescriptionText: {
    fontSize: 17,
    color: Colors.white,
    alignSelf: "center",
    marginTop: 20,
    maxWidth: "80%",
    textAlign: "center",
  },
  yourPointsText: {
    fontSize: 25,
    fontWeight: "400",
    color: Colors.white,
    alignSelf: "center",
    marginTop: 50,
  },
  yourPointsValueText: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.white,
    alignSelf: "center",
    marginTop: 8,
  },
  seeStudentResultsText: {
    fontSize: 17,
    color: Colors.white,
    alignSelf: "center",
    marginTop: 20,
    maxWidth: "80%",
    textAlign: "center",
  },

  bottomContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
  },
});
