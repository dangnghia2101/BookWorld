import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import ScheduleScreenMyAp from './ScheduleScreenMyAp';
import DetailAttendance from './ScheduleScreenMyAp/components/DetailAttendance';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const ScheduleMyApNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={routes.SCHEDULE_SCREEN_MY_AP}
        component={ScheduleScreenMyAp}
      />
      <Stack.Screen
        name={routes.DETAIL_ATTENDANCE_SCREEN_MY_AP}
        component={DetailAttendance}
      />
    </Stack.Navigator>
  );
};

export default ScheduleMyApNavigator;
