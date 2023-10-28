import { StyleSheet } from "react-native";
import { style as globalStyle } from "../../global";

const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "80%",
    minWidth: "40%",
  },

  myMessage: {
    backgroundColor: globalStyle.colors.GREEN_DARK,
    alignSelf: "flex-end",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
  },

  othersMessage: {
    backgroundColor: globalStyle.colors.GRAY_DARK,
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  
  myMessageText: {
    color: globalStyle.colors.GRAY,
    fontSize: 16,
  },

  myHour: {
    color: globalStyle.colors.GRAY,
    fontSize: 12,
    alignSelf: "flex-end",
  },

  othersMessageText: {
    color: globalStyle.colors.BLACK,
    fontSize: 16,
  },

  othersHour: {
    color: globalStyle.colors.BLACK,
    fontSize: 12,
    alignSelf: "flex-start",
  },

  name: {
    color: globalStyle.colors.GRAY_DARKEST,
    fontSize: 12,
    marginBottom: 5,
  },
});

export default style;

