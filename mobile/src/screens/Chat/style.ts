import { StyleSheet } from "react-native";

import { style as globalStyle } from "../../global";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.colors.GRAY_LIGHTER,
  },

  containerMessage: {
    flex: 1,
  },

  contentInputMessage: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  inputMessage: {
    backgroundColor: globalStyle.colors.GRAY_DARK,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    width: "80%",
    borderColor: globalStyle.colors.BLACK,
    borderRadius: 50,
    height: 45,
  },

  iconSend: {
    backgroundColor: globalStyle.colors.GREEN_LIGHT,
    padding: 15,
    borderRadius: 50,
  },

  iconSendDisabled: {
    backgroundColor: globalStyle.colors.GRAY_DARK,
    padding: 15,
    borderRadius: 50,
  },

  viewTextNoMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textNoMessage: {
    fontSize: 16,
    color: globalStyle.colors.BLACK,
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default style;
