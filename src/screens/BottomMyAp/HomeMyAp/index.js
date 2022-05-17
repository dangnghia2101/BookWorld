import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import HomeScreenMyAp from './HomeScreenMyAp';
import Detail from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/Detail';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeMyApNavigator = ({navigation, route}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={routes.HOME_MY_AP} component={HomeScreenMyAp} />
      <Stack.Screen name={routes.MENU_DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeMyApNavigator;
