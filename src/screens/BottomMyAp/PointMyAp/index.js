import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import PointScreenMyAp from './PointScreenMyAp';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const PointMyApNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={'POINT_SCREEN'} component={PointScreenMyAp} />
    </Stack.Navigator>
  );
};

export default PointMyApNavigator;
