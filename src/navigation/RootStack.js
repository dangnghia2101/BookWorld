import {Text} from '@components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import actions, {_onSuccess} from '@redux/actions';
import {auth} from '@screens/Auth';
// import EventDetail from '@screens/Bottom/EventMain/EventDetail';
// import SearchHome from '@screens/Bottom/HomeMain/HomeScreen/components/SearchHome';
import BlankScreen from '@screens/Bottom/ProfileMain/InfoScreen/components/BlankScreen';
import HomeScreenMyAp from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp';
import NotificationScreenMyAp from '@screens/BottomMyAp/NotificationMyAp/NotificationScreenMyAp';
import ProfileScreenMyAp from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp';
import ScheduleScreenMyAp from '@screens/BottomMyAp/ScheduleMyAp/ScheduleScreenMyAp';
import {theme} from '@theme';
import Storage from '@utils/storage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  Linking,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BottomTabMyAp from './BottomTabMyAp';
import {navigationRef} from './RootNavigation';
import {APP_PREFIX, PATH_SCREENS, routes} from './routes';
import RewardScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/screens/RewardScreen';
import SMSScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/screens/SMSScreen';
import TuitionScreen from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/screens/TuitionScreen';
import SettingNavigator from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/Settings';
import ServiceOnlineNavigator from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline';
import ContentDrawer from './ContentDrawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function MainContainer() {
  const linking = {
    prefixes: APP_PREFIX,
    config: PATH_SCREENS,
  };
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const isLoginSelector = useSelector(state => state.login.data);
  const isShowUpdate = useSelector(state => state.checkVersionApp.data);
  const [isShowModal, setIShowModal] = useState(false);
  const LinkToStore = () => {
    if (Platform.OS === 'ios') {
      return Linking.openURL(
        'https://apps.apple.com/vn/app/emotion-passport/id1604483339?l=vi',
      );
    }
    return Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.emotionstudent',
    );
  };
  useEffect(() => {
    if (isLoginSelector) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLoginSelector]);
  useLayoutEffect(() => {
    if (isShowUpdate?.check) {
      setIShowModal(true);
    } else {
      setIShowModal(false);
    }
  }, [isShowUpdate?.check]);
  useEffect(() => {
    dispatch({type: actions.CHECK_VERSION_APP});
  }, [dispatch]);
  useEffect(() => {
    Storage.getItem('tokenId').then(item => {
      if (item !== null) {
        dispatch({type: _onSuccess(actions.LOGIN_ACCOUNT), data: item.data});
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, [dispatch]);
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
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
            <Drawer.Screen name={routes.BLANK_SCREEN} component={BlankScreen} />
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
            <Drawer.Screen
              name={routes.PROFILE_SCREEN_MY_AP}
              component={ProfileScreenMyAp}
            />
            <Drawer.Screen
              name={routes.REWARDS_SCREEN_PROFILE}
              component={RewardScreen}
            />
            <Drawer.Screen
              name={routes.LIST_SERVICE_NAVIGATION}
              component={ServiceOnlineNavigator}
            />
            <Drawer.Screen
              name={routes.SMS_SCREEN_PROFILE}
              component={SMSScreen}
            />
            <Drawer.Screen
              name={routes.TUITION_SCREEN_PROFILE}
              component={TuitionScreen}
            />
            <Drawer.Screen
              name={routes.SETTING_NAVIGATION}
              component={SettingNavigator}
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
      <Modal
        transparent={true}
        animationType={'none'}
        visible={isShowModal}
        statusBarTranslucent={true}>
        <Pressable style={styles.container}>
          <Pressable style={styles.boxCenter}>
            <Text size={18} center fontType={theme.fonts.fontWeight.bold}>
              Phiên bản không phù hợp
            </Text>
            <Text size={16}>Vui lòng nhấn cập nhật để tiếp tục.</Text>
            <TouchableOpacity style={styles.btnUpdate} onPress={LinkToStore}>
              <Text fontType={theme.fonts.fontWeight.bold}>Cập nhập </Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  boxCenter: {
    backgroundColor: theme.colors.white,
    padding: 10,
    borderRadius: 7,
  },
  btnUpdate: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.green,
    marginTop: 10,
    width: '100%',
    padding: 8,
    borderRadius: 7,
  },
});
