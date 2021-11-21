import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    height: 140,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9,
  },
  imageView: {
    width: "35%",
    height: 100,
    borderRadius: 9,
  },
  textView: {
    flexDirection: "column",
    width: "65%",
    height: "70%",
  },
  title: {
    color: Colors.white,
    fontWeight: "800",
    textAlign: "center",
    fontSize: 15,
    maxWidth: "95%",
    marginBottom: 10,
  },
  description: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 13,
    maxWidth: "95%",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
