import {Block, Text} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import actions from '@redux/actions';
// import { bottom } from '@screens/Bottom';
import {bottom} from '../screens/BottomMyAp';
import React, {useEffect, useRef} from 'react';
import {Animated, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {theme} from '../theme';
import {routes} from './routes';

const Tab = createBottomTabNavigator();
const PADDING_BOTTOM = Platform.OS === 'ios' ? 20 : 0;
const {colors} = theme;

const BottomTabMyAp = () => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.notificationPrivateNotRead);
  useEffect(() => {
    dispatch({type: actions.GET_NOTIFICATION_PRIVATE_READ});
  }, [dispatch]);
  function CustomTab({state, descriptors, navigation}) {
    const scaleBotTabBar = useRef(new Animated.Value(0.5)).current;
    const scaleOut = () => {
      Animated.timing(scaleBotTabBar, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    };
    return (
      <Block
        paddingVertical={10}
        paddingBottom={PADDING_BOTTOM}
        flexDirection="row"
        backgroundColor={'#fff'}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          if (isFocused) {
            scaleOut();
          }
          const iconName =
            options.tabBarIcon !== undefined ? options.tabBarIcon : 'home';
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          const backgroundColor = isFocused
            ? colors.orangeTranparent
            : colors.white;
          const color = isFocused ? colors.orange : colors.gray;
          const flex = isFocused ? 3.5 : 0;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.container,
                {
                  transform: [
                    isFocused ? {scaleX: scaleBotTabBar} : {scale: 1},
                  ],
                  flex,
                  backgroundColor,
                },
              ]}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Block style={[styles.bottomTabSection]}>
                <MaterialCommunityIcons
                  color={color}
                  size={20}
                  name={iconName}
                />
                {isFocused && <Text style={[{color}]}>{label}</Text>}
                {route.name === 'NOTIFICATION_MAIN' && res.data?.count > 0 && (
                  <Block
                    backgroundColor={theme.colors.red}
                    absolute
                    top={-15}
                    right={-15}
                    width={20}
                    height={20}
                    radius={20 / 2}
                    justifyCenter
                    alignCenter>
                    <Text
                      color={theme.colors.white}
                      center
                      size={10}
                      numberOfLines={1}
                      fontType={theme.fonts.fontWeight.bold}>
                      {res.data?.count}
                    </Text>
                  </Block>
                )}
              </Block>
            </TouchableOpacity>
          );
        })}
      </Block>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTab {...props} />}>
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
          tabBarLabel: 'Lịch học',
          tabBarIcon: 'layers',
        }}
      />

      <Tab.Screen
        name={routes.POINT_SCREEN_MY_AP}
        component={bottom.POINT_MY_AP}
        options={{
          tabBarLabel: 'Điểm',
          tabBarIcon: 'table',
        }}
      />
      <Tab.Screen
        name={routes.PROFILE_SCREEN_MY_AP}
        component={bottom.PROFILE_MY_AP}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: 'account-outline',
        }}
      />
      <Tab.Screen
        name={routes.HOME_ALL_APP}
        component={bottom.HOME_ALL_APP}
        options={{
          tabBarLabel: 'Ứng dụng',
          tabBarIcon: 'apps',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 50,
    padding: 5,
    flex: 1,
    marginHorizontal: 15,
    // paddingBottom: PADDING_BOTTOM,
  },
  bottomTabSection: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default BottomTabMyAp;
