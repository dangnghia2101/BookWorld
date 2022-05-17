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
    // <Stack.Navigator screenOptions={screenOptionStyle}>
    //   <Stack.Screen
    //     name={routes.SCHEDULE_SCREEN_MY_AP}
    //     component={ScheduleScreenMyAp}
    //   />
    // </Stack.Navigator>

    <ScheduleScreenMyAp />
  );
};

export default ScheduleMyApNavigator;
