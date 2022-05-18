import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import actions from '@redux/actions';
// import { bottom } from '@screens/Bottom';
import {bottom} from '../screens/BottomMyAp';
import React from 'react';
import CustomTabar from './CustomTabar';
// import {useDispatch, useSelector} from 'react-redux';
import {routes} from './routes';

const Tab = createBottomTabNavigator();

const BottomTabMyAp = () => {
  // const dispatch = useDispatch();
  // const res = useSelector(state => state.notificationPrivateNotRead);
  // useEffect(() => {
  //   dispatch({type: actions.GET_NOTIFICATION_PRIVATE_READ});
  // }, [dispatch]);

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabar {...props} />}>
      <Tab.Screen
        name={routes.HOME_MY_AP}
        component={bottom.HOME_MY_AP}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: 'home',
        }}
      />

      <Tab.Screen
        name={routes.SCHEDULE_SCREEN_MY_AP}
        component={bottom.SCHEDULE_MY_AP}
        options={{
          tabBarLabel: 'Đang đọc',
          tabBarIcon: 'book-open-page-variant-outline',
        }}
      />

      <Tab.Screen
        name={routes.POINT_SCREEN_MY_AP}
        component={bottom.POINT_MY_AP}
        options={{
          tabBarLabel: 'Đánh dấu',
          tabBarIcon: 'bookmark-outline',
        }}
      />

      <Tab.Screen
        name={routes.HOME_ALL_APP}
        component={bottom.MORE_MY_APP}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: 'account-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabMyAp;
