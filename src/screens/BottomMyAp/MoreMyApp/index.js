import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import MoreScreenMyApp from './MoreScreenMyApp';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const MoreAppNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={'SCREEN_ALLA'} component={MoreScreenMyApp} />
    </Stack.Navigator>

    // <MoreScreenMyApp />
  );
};

export default MoreAppNavigator;
