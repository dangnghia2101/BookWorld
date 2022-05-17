import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import HomeScreenAllApp from './HomeScreenAllApp';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeAllAppNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={routes.HOME_ALL_APP} component={HomeScreenAllApp} />
    </Stack.Navigator>
  );
};

export default HomeAllAppNavigator;
