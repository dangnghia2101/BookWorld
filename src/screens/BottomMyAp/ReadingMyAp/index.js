import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '@navigation/routes';
import ReadingScreenMyAp from './ReadingScreenMyAp';
import DetailAuthor from './DetailAuthor/DetailAuthor';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const ScheduleMyApNavigator = ({ navigation, route }) => {
  navigation.setOptions({ tabBarVisible: false });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={'READING_SCREEN'} component={ReadingScreenMyAp} />
      <Stack.Screen
        name={routes.DETAIL_AUTHOR_MY_AP}
        component={DetailAuthor}
      />
    </Stack.Navigator>
  );
};

export default ScheduleMyApNavigator;
