import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import SettingScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/Settings/screen/SettingScreen';
import PrivacyScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/Settings/screen/PrivacyScreen';
import SecurityScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/Settings/screen/SecurityScreen';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const SettingNavigator = ({navigation}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator
      initialRouteName={routes.SETTING_SCREEN}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name={routes.SETTING_SCREEN} component={SettingScreen} />
      <Stack.Screen name={routes.PRIVACY_SCREEN} component={PrivacyScreen} />
      <Stack.Screen name={routes.SECURITY_SCREEN} component={SecurityScreen} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
