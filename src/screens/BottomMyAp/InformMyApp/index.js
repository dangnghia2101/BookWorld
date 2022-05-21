import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import InformScreenMyApp from './InformScreenMyApp';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const InformMyApNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={'POINT_SCREEN'} component={InformScreenMyApp} />
    </Stack.Navigator>
  );
};

export default InformMyApNavigator;
