import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import HomeScreenMyAp from './HomeScreenMyAp';
import DetailBookScreenMyAp from './DetailBookScreenMyAp';
import PlayBookScreenMyAp from './PlayBookScreenMyAp';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeMyApNavigator = ({navigation, route}) => {
  // navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={routes.HOME_SCREEN_MY_AP}
        component={HomeScreenMyAp}
      />
      <Stack.Screen
        name={routes.DETAIL_BOOK_MY_AP}
        component={DetailBookScreenMyAp}
      />
    </Stack.Navigator>
  );
};

export default HomeMyApNavigator;
