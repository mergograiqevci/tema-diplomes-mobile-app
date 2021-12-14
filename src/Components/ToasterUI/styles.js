import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 0.4,
    borderColor: "#A0A8A3",
  },
  left: {
    width: "2%",
    height: "100%",
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
    marginRight: 10,
  },
  text: {
    maxWidth: "72%",
    paddingVertical: 20,
    fontSize: 15,
  },
});
