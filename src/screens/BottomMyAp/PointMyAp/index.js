import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import PointScreenMyAp from './PointScreenMyAp';
import DetailPointSemestor from './PointScreenMyAp/components/DetailPointSemestor';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const PointMyApNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={routes.POINT_SCREEN_MY_AP}
        component={PointScreenMyAp}
      />
      <Stack.Screen
        name={routes.DETAIL_POINT_SEMESTOR_SCREEN_MY_APP}
        component={DetailPointSemestor}
      />
    </Stack.Navigator>
  );
};

export default PointMyApNavigator;
