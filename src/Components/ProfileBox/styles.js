import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: "absolute",
  },
  mapView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileView: {
    width: "85%",
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    height: 210,
    alignSelf: "center",
    position: "absolute",
    borderRadius: 9,
    alignItems: "center",
    paddingTop: 10,
  },
  nameText: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 15,
  },
});
