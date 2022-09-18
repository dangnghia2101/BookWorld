import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import actions from '@redux/actions';
// import { bottom } from '@screens/Bottom';
import {bottom} from '../screens/BottomMyAp';
import React from 'react';
import CustomTabar from './CustomTabar';
// import {useDispatch, useSelector} from 'react-redux';
import {routes} from './routes';
import {StyleSheet, View} from 'react-native';
import IconView from '@components/Icon';
// import {useDispatch, useSelector} from 'react-redux';
import {theme} from '../theme';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
});

const activeHome = isPlay => {
  return (
    <View
      style={[
        styles.container_icon,
        {
          backgroundColor: isPlay ? theme.colors.red : theme.colors.gray4,
        },
      ]}>
      <IconView
        component={'MaterialIcons'}
        name={'home'}
        size={25}
        color={isPlay ? 'white' : 'black'}
      />
    </View>
  );
};

const activeStore = isPlay => {
  return (
    <View
      style={[
        styles.container_icon,
        {
          backgroundColor: isPlay ? theme.colors.red : theme.colors.gray4,
        },
      ]}>
      <IconView
        component={'MaterialIcons'}
        name={'book-open-page-variant-outline'}
        size={25}
        color={isPlay ? 'white' : 'black'}
      />
    </View>
  );
};

const activeChat = isPlay => {
  return (
    <View
      style={[
        styles.container_icon,
        {
          backgroundColor: isPlay ? theme.colors.red : theme.colors.gray4,
        },
      ]}>
      <IconView
        component={'MaterialIcons'}
        name={'chat'}
        size={25}
        color={isPlay ? 'white' : 'black'}
      />
    </View>
  );
};

const activeSetting = isPlay => {
  return (
    <View
      style={[
        styles.container_icon,
        {
          backgroundColor: isPlay ? theme.colors.red : theme.colors.gray4,
        },
      ]}>
      <IconView
        component={'MaterialIcons'}
        name={'settings'}
        size={25}
        color={isPlay ? 'white' : 'black'}
      />
    </View>
  );
};

const tabData = [
  {
    name: 'Nhà',
    activeIcon: activeHome(true),
    inactiveIcon: activeHome(false),
    key: 1,
  },
  // {
  //   name: 'Lưu trữ',
  //   activeIcon: activeStore(true),
  //   inactiveIcon: activeStore(false),
  //   key: 2,
  // },
  // {
  //   name: 'Nhắn tin',
  //   activeIcon: activeChat(true),
  //   inactiveIcon: activeChat(false),
  //   key: 3,
  // },
  // {
  //   name: 'Cài đặt',
  //   activeIcon: activeSetting(true),
  //   inactiveIcon: activeSetting(false),
  //   key: 4,
  // },
];
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
          component: 'AntDesign',
        }}
      />

      <Tab.Screen
        name={routes.READING_MY_APP}
        component={bottom.READING_MY_APP}
        options={{
          tabBarLabel: 'Đang đọc',
          tabBarIcon: 'book-open-variant',
          component: 'MaterialCommunityIcons',
        }}
      />

      <Tab.Screen
        name={routes.CHAT_MY_AP}
        component={bottom.CHAT_MY_AP}
        options={{
          tabBarLabel: 'Nhắn tin',
          tabBarIcon: 'chat-outline',
          tabBarStyle: {display: 'none'},
        }}
      />

      <Tab.Screen
        name={routes.MORE_MY_APP}
        component={bottom.MORE_MY_APP}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: 'ios-settings-outline',
          component: 'Ionicons',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabMyAp;
