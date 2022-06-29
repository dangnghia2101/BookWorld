import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import MoreScreenMyApp from './MoreScreenMyApp';
import EditMoreMyApp from './EditMoreMyApp';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const MoreAppNavigator = ({navigation, route}) => {
  // navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={routes.SCREEN_SETTINGS} component={MoreScreenMyApp} />
      <Stack.Screen
        name={routes.SCREEN_EDIT_SETTINGS}
        component={EditMoreMyApp}
      />
    </Stack.Navigator>
  );
};

export default MoreAppNavigator;
