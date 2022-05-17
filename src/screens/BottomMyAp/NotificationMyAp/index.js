import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import NotificationScreenMyAp from './NotificationScreenMyAp';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const NotificationMyApNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={routes.NOTIFICATION_SCREEN_MY_AP}
        component={NotificationScreenMyAp}
      />
    </Stack.Navigator>
  );
};

export default NotificationMyApNavigator;
