import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    padding: 15,
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: 'left',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default style;
