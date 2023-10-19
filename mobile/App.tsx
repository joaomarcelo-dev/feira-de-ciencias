import { Provider } from 'react-redux';
import store from './src/Redux/store.redux';
import Router from './src/Router/index.router';
import { StatusBar } from 'react-native';
import { style } from './src/global';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={style.colors.BLACK}
      />
      <Router />
    </Provider>
  );
}