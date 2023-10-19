import { StyleSheet } from "react-native";
import { style as globalStyle } from "../../global"; 

const style = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colors.GRAY_DARK,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  loadingText: {
    color: globalStyle.colors.BLACK,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default style;

