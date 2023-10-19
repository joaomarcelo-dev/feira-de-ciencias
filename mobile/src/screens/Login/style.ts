import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  inputText: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: '80%',
    height: 40,
    marginBottom: 15,
    paddingLeft: 15,
  },

  buttonSubmit: {
    backgroundColor: '#000',
    borderRadius: 5,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSubmitDisabled: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButtonSubmit: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default style;
