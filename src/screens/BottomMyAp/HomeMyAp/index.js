import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import HomeScreenMyAp from './HomeScreenMyAp';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeMyApNavigator = ({navigation, route}) => {
  // navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={'HOME'} component={HomeScreenMyAp} />
    </Stack.Navigator>
  );
};

export default HomeMyApNavigator;
