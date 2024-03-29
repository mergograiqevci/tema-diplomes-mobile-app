import { StyleSheet } from "react-native";
import Colors from "~/Assets/Colors";
export default StyleSheet.create({
  container: {
    // height: 140,
    paddingVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 9,
  },
  imageView: {
    width: "35%",
    height: 100,
    borderRadius: 9,
  },
  textView: {
    flexDirection: "column",
    width: "60%",
    height: "70%",
    maxWidth: "60%",
    marginLeft: 10,
    alignItems: "center",
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
    bottom: 7,
    right: 10,
  },
  readBookView: {
    position: "absolute",
    bottom: 0,
    right: 20,
  },
  readBookText: {
    color: Colors.blue,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  progressText: {
    color: Colors.white,
    textAlign: "left",
    fontWeight: "600",
    marginBottom: 5,
    fontSize: 13,
  },
  bgText: {
    backgroundColor: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
