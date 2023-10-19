import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chat from '../screens/Chat';

const Stack = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Chats',
        }}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarButton: () => null,
          
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomTabs;
