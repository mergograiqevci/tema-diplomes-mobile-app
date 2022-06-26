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
    marginTop: 120,
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    marginTop: 20,
    fontSize: 25,
    // marginLeft: 25,
    textAlign: "center",
  },
  testAppButton: {
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: "transparent",
    borderStyle: "solid"
  },
  testAppButtonText: {
    color: Colors.white,
    fontSize: 18,
    padding: 5,
  },
  testAppButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    flex: 0.7,
    alignItems: "flex-end"
  }
});
