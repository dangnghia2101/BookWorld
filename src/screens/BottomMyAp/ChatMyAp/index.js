import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import ChatScreenMyApp from './ChatScreenMyAp';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const ChatMyApNavigator = ({navigation}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={routes.CHAT_SCREEN_MY_AP}
        component={ChatScreenMyApp}
      />
    </Stack.Navigator>
  );
};

export default ChatMyApNavigator;
