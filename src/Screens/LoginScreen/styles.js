import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBaseColor,
  },
  loginLogo: {
    marginTop: 97,
    marginLeft: 25,
  },
  title: {
    color: Colors.white,
    marginTop: 20,
    fontSize: 25,
    marginLeft: 25,
    // fontFamily: "Montserrat-Bold",
  },
});
