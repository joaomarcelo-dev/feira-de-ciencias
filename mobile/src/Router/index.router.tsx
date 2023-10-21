import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './BottomTabs.navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { useSelector } from 'react-redux';
import RootReducer from '../types/RootReducer.type';
import Login from '../screens/Login';

function Router() {
  const { userName, userPassword, tokenUser, userId } = useSelector((state: RootReducer) => state.app);  

  return (
    <SafeAreaProvider>
      <NavigationContainer>
          {
            !userName || !userPassword || !tokenUser || !userId
              ? <Login />
              : <BottomTabs />
          }
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Router;

