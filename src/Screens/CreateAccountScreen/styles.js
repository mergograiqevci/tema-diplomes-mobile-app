import { StyleSheet, Dimensions } from "react-native";
import Colors from "~/Assets/Colors";
const { height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    height: height,
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
