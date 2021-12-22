import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    width: width,
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
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 9,
    alignItems: "center",
    paddingTop: 10,
  },
  nameText: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 17,
  },
});
