import { StyleSheet } from "react-native";
import { style as styleGlobal } from "../../global";

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: styleGlobal.colors.PRIMARY,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: styleGlobal.colors.WHITE,
    textAlign: "center",
  },
})

export default style;
