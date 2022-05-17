import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import ListServiceScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/screens/ListServiceScreen';
import TuitionScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/screens/TuitionScreen';
import ReRegisterExamScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/screens/ReRegisterExamScreen';
import ReRegisterStudyScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/screens/ReRegisterStudyScreen';
import RegisterChangeMajorsScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/screens/RegisterChangeMajorsScreen';
import RegisterReserveScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/screens/RegisterReserveScreen';
import RegisteredServiceScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/screens/RegisteredServiceScreen';
import BlankScreen from '@screens/Bottom/ProfileMain/InfoScreen/components/BlankScreen';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const ServiceOnlineNavigator = ({navigation}) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator
      initialRouteName={routes.LIST_SERVICE_SCREEN}
      screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={routes.LIST_SERVICE_SCREEN}
        component={ListServiceScreen}
      />
      <Stack.Screen name={routes.TUITION_SCREEN} component={TuitionScreen} />
      <Stack.Screen
        name={routes.RE_REGISTER_EXAM_SCREEN}
        component={ReRegisterExamScreen}
      />
      <Stack.Screen
        name={routes.RE_REGISTER_STUDY_SCREEN}
        component={ReRegisterStudyScreen}
      />
      <Stack.Screen
        name={routes.REGISTER_CHANGE_MAJOR_SCREEN}
        component={RegisterChangeMajorsScreen}
      />
      <Stack.Screen
        name={routes.REGISTER_REVERSE_SCREEN}
        component={RegisterReserveScreen}
      />
      <Stack.Screen
        name={routes.REGISTERED_SERVICE_SCREEN}
        component={RegisteredServiceScreen}
      />
      <Stack.Screen
        name={routes.BLANK_SCREEN + '_' + routes.LIST_SERVICE_SCREEN}
        component={BlankScreen}
      />
    </Stack.Navigator>
  );
};

export default ServiceOnlineNavigator;
