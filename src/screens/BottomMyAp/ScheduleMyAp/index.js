import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import ScheduleScreenMyAp from './ScheduleScreenMyAp';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const ScheduleMyApNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={'SCHEDULE_SCREEN'} component={ScheduleScreenMyAp} />
    </Stack.Navigator>
  );
};

export default ScheduleMyApNavigator;
