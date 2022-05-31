import {NavigationContainer} from '@react-navigation/native';
import {auth} from '@screens/Auth';
// import EventDetail from '@screens/Bottom/EventMain/EventDetail';
// import SearchHome from '@screens/Bottom/HomeMain/HomeScreen/components/SearchHome';
// import HomeScreenMyAp from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp';
// import NotificationScreenMyAp from '@screens/BottomMyAp/NotificationMyAp/NotificationScreenMyAp';
// import ScheduleScreenMyAp from '@screens/BottomMyAp/ScheduleMyAp/ScheduleScreenMyAp';
// import {theme} from '@theme';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import BottomTabMyAp from './BottomTabMyAp';
// import {navigationRef} from './RootNavigation';
// import {routes} from './routes';
// import ContentDrawer from './ContentDrawer';
// const Drawer = createDrawerNavigator();
import Login from '@screens/Auth/Login';
import Auth from '../screens/Auth';
import Welcome from '../screens/Auth/Welcome';

export default function MainContainer() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <NavigationContainer>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        {isLogin ? <Auth /> : <BottomTabMyAp />}
      </NavigationContainer>
    </>
  );
}
