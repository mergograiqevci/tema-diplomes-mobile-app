import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  title: {
    color: Colors.black,
    marginVertical: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    // fontFamily: "Montserrat-Bold",
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
    marginTop: 20,
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
