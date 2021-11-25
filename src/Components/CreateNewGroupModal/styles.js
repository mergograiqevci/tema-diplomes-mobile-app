import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  title: {
    color: Colors.black,
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    // fontFamily: "Montserrat-Bold",
  },
  selectStudents: {
    color: Colors.black,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  selectedStudents: {
    color: Colors.black,
    marginVertical: 10,
    fontSize: 13,
    fontWeight: "400",
  },
  subTitle: {
    color: Colors.gray,
    marginBottom: 10,
    fontSize: 14,
    textAlign: "center",
    // fontFamily: "Montserrat-Bold",
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  button: {
    width: "45%",
    paddingVertical: 10,
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
