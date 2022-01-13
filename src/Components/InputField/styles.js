import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  inputView: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 35,
    borderRadius: 13,
    marginVertical: 6,
    fontSize: 14,
    backgroundColor: Colors.white,
    flex: 1,
    color: Colors.authHeaderText,
    // fontFamily: "Montserrat-Regular",
  },
  iconView: {
    position: "absolute",
    // paddingTop: 14,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 15,
    // fontFamily: "Montserrat-Regular",
  },
});
