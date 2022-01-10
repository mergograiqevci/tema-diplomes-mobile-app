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
  footerText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: "800",
    opacity: 0.9,
    textAlign: "center",
    marginTop: 40,
  },
  gradeView: {
    flexDirection: "row",
    marginHorizontal: 50,
    marginTop: 70,
    justifyContent: "space-between",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: Colors.gray,
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 13,
    borderRadius: 6,
    fontWeight: "600",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonSaveView: {
    backgroundColor: Colors.appBaseColor,
    borderRadius: 9,
  },
  buttonSaveViewText: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontSize: 17,
    borderRadius: 6,
    color: Colors.white,
  },
  question: {
    marginLeft: 12,
    fontSize: 17,
    marginVertical: 5,
    fontWeight: "800",
    color: "gray",
  },
});
