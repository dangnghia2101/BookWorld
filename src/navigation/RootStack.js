import {NavigationContainer} from '@react-navigation/native';
import {auth} from '@screens/Auth';
// import EventDetail from '@screens/Bottom/EventMain/EventDetail';
// import SearchHome from '@screens/Bottom/HomeMain/HomeScreen/components/SearchHome';
import HomeScreenMyAp from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp';
import NotificationScreenMyAp from '@screens/BottomMyAp/NotificationMyAp/NotificationScreenMyAp';
import ScheduleScreenMyAp from '@screens/BottomMyAp/ScheduleMyAp/ScheduleScreenMyAp';
import {theme} from '@theme';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import BottomTabMyAp from './BottomTabMyAp';
import {navigationRef} from './RootNavigation';
import {routes} from './routes';
import ContentDrawer from './ContentDrawer';
const Drawer = createDrawerNavigator();

export default function MainContainer() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Drawer.Navigator
        drawerContent={ContentDrawer}
        screenOptions={{headerShown: false}}>
        {/* <Drawer.Screen
          name={routes.BOTTOM_TAB_MY_AP}
          component={BottomTabMyAp}
        /> */}
        {isLogin ? (
          <>
            <Drawer.Screen
              name={routes.BOTTOM_TAB_MY_AP}
              component={BottomTabMyAp}
            />
            <Drawer.Screen
              name={routes.HOME_SCREEN_MY_AP}
              component={HomeScreenMyAp}
            />
            <Drawer.Screen
              name={routes.SCHEDULE_SCREEN_MY_AP}
              component={ScheduleScreenMyAp}
            />
            <Drawer.Screen
              name={routes.NOTIFICATION_SCREEN_MY_AP}
              component={NotificationScreenMyAp}
            />
          </>
        ) : (
          <Drawer.Screen
            name={routes.LOGIN_SCREEN}
            component={auth.LOGIN_SCREEN}
            options={{swipeEnabled: false}}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
