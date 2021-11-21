import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    marginTop: 50,
  },
  loginButton: {
    backgroundColor: Colors.blue,
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 30,
  },
  loginButtonText: {
    color: Colors.white,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    // fontFamily: "Montserrat-SemiBold",
  },
});
