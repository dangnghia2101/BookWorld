import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import actions from '@redux/actions';
// import { bottom } from '@screens/Bottom';
import { bottom } from '../screens/BottomMyAp';
import React, { useEffect, useState } from 'react';
import CustomTabar from './CustomTabar';
// import {useDispatch, useSelector} from 'react-redux';
import { routes } from './routes';
import IconView from '@components/Icon';
import { View, Text, StyleSheet } from 'react-native';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import HomeScreenMyAp from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@theme';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};
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

  const navigation = useNavigation();

  const [tabs, setTabs] = useState(tabData);
  const [bgColor, setBgColor] = useState(theme.colors.red);
  const [tabActive, setTabActive] = useState(1);

  // useEffect(() => {
  //   I18nManage.forceRTL(true);
  // }, []);

  const onTabChange = item => {
    let tempTabs = [...tabs];
    setTimeout(() => {
      tempTabs.map(val => {
        if (item.name === 'Home' && val.name === 'Home') {
          // val.activeIcon = Object.assign({}, activeHome(true));
          // setBgColor('#FFC0C7');
          navigation.navigate(routes.HOME_MY_AP);
        } else if (item.name === 'Cart' && val.name === 'Cart') {
          // val.activeIcon = Object.assign({}, activeList(true));
          // setBgColor('#FF7128');
          navigation.navigate(routes.CART_MY_AP);
        } else if (item.name === 'Search' && val.name === 'Search') {
          // val.activeIcon = Object.assign({}, activeCamera(true));
        } else if (item.name === 'Setting' && val.name === 'Setting') {
          // val.activeIcon = Object.assign({}, activeNotification(true));
        } else {
          val.activeIcon = null;
        }
      });

      setTabs(tempTabs);
    }, 500);

    tempTabs.map(val => {
      if (item.name === 'Nhà' && val.name === 'Nhà') {
        val.activeIcon = Object.assign({}, activeHome(true));
        navigation.navigate(routes.HOME_MY_AP);
      } else if (item.name === 'Lưu trữ' && val.name === 'Lưu trữ') {
        val.activeIcon = Object.assign({}, activeStore(true));
        navigation.navigate(routes.READING_MY_APP);
      } else if (item.name === 'Nhắn tin' && val.name === 'Nhắn tin') {
        val.activeIcon = Object.assign({}, activeChat(true));
        navigation.navigate(routes.CART_MY_AP);
      } else if (item.name === 'Cài đặt' && val.name === 'Cài đặt') {
        val.activeIcon = Object.assign({}, activeSetting(true));
        navigation.navigate(routes.MORE_MY_APP);
      } else {
        val.activeIcon = null;
      }
    });
  };

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
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
        name={routes.CART_MY_AP}
        component={bottom.CART_MY_AP}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: 'shopping-cart',
          tabBarStyle: {display: 'none'},
          component: 'Feather',
        }}
      />

      <Tab.Screen
        name={routes.CHAT_MY_AP}
        component={bottom.CHAT_MY_AP}
        options={{
          tabBarLabel: 'Nhắn tin',
          tabBarIcon: 'chat',
          tabBarStyle: { display: 'none' },
          component: 'MaterialIcons',
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
