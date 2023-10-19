import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './BottomTabs.navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { useSelector } from 'react-redux';
import RootReducer from '../types/RootReducer.type';
import Login from '../screens/Login';

function Router() {
  const { userName, userPassword, tokenUser, connected, idUser } = useSelector((state: RootReducer) => state.app);

  console.log(connected);
  

  return (
    <SafeAreaProvider>
      <NavigationContainer>
          {
            !userName || !userPassword || !tokenUser || !idUser
              ? <Login />
              : <BottomTabs />
          }
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Router;

