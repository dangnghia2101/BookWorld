export const routes = {
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  BOTTOM_TAB: 'BOTTOM_TAB',
  HOME_SCREEN: 'HOME_SCREEN',
  EVENT_SCREEN: 'EVENT_SCREEN',
  NOTIFICATION_SCREEN: 'NOTIFICATION_SCREEN',
  PROFILE_SCREEN: 'PRODUCT_SCREEN',

  HOME_MAIN: 'HOME_MAIN',
  EVENT_MAIN: 'EVENT_MAIN',
  NOTIFICATION_MAIN: 'NOTIFICATION_MAIN',
  PROFILE_MAIN: 'PROFILE_MAIN',

  ALL_EVENT: 'ALL_EVENT',
  SEARCH_HOME: 'SEARCH_HOME',
  SCAN_SUCCESS: 'SCAN_SUCCESS',
  ALL_CARDS_EVENT: 'ALL_CARDS_EVENT',
  BLANK_SCREEN: 'BLANK_SCREEN',
  EVENT_DETAIL: 'EVENT_DETAIL',

  //MyAp
  BOTTOM_TAB_MY_AP: 'BOTTOM_TAB_MY_AP',
  HOME_MY_AP: 'HOME_MY_AP',
  NOTIFICATION_SCREEN_MY_AP: 'NOTIFICATION_SCREEN_MY_AP',
  POINT_SCREEN_MY_AP: 'POINT_SCREEN_MY_AP',
  PROFILE_SCREEN_MY_AP: 'PROFILE_SCREEN_MY_AP',
  SCHEDULE_SCREEN_MY_AP: 'SCHEDULE_SCREEN_MY_AP',
  HOME_SCREEN_MY_AP: 'HOME_SCREEN_MY_AP',

  // In Profile Screen
  REWARDS_SCREEN_PROFILE: 'REWARDS_SCREEN_PROFILE',
  SMS_SCREEN_PROFILE: 'SMS_SCREEN_PROFILE',
  TUITION_SCREEN_PROFILE: 'TUITION_SCREEN_PROFILE',
  SETTING_NAVIGATION: 'SETTING_NAVIGATION',
  LIST_SERVICE_NAVIGATION: 'LIST_SERVICE_NAVIGATION',

  // Service navigation
  LIST_SERVICE_SCREEN: 'LIST_SERVICE_SCREEN',
  TUITION_SCREEN: 'TUITION_SCREEN',
  RE_REGISTER_EXAM_SCREEN: 'RE_REGISTER_EXAM_SCREEN',
  RE_REGISTER_STUDY_SCREEN: 'RE_REGISTER_STUDY_SCREEN',
  REGISTER_CHANGE_MAJOR_SCREEN: 'REGISTER_CHANGE_MAJOR_SCREEN',
  REGISTER_REVERSE_SCREEN: 'REGISTER_REVERSE_SCREEN',
  REGISTERED_SERVICE_SCREEN: 'REGISTERED_SERVICE_SCREEN',

  // Setting navigation
  SETTING_SCREEN: 'SETTING_SCREEN',
  PRIVACY_SCREEN: 'PRIVACY_SCREEN',
  SECURITY_SCREEN: 'SECURITY_SCREEN',

  MENU_DETAIL: 'MENU_DETAIL',
  DETAIL_ATTENDANCE_SCREEN_MY_AP: 'DETAIL_ATTENDANCE_SCREEN_MY_AP',
  DETAIL_POINT_SEMESTOR_SCREEN_MY_APP: 'DETAIL_POINT_SEMESTOR_SCREEN_MY_APP',
  HOME_ALL_APP: 'HOME_ALL_APP',

  HOME_TABS: 'HOME_TABS',
};

export const APP_PREFIX = ['emotion://', 'https://emotion.com'];

export const PATH_SCREENS = {
  screens: {
    [routes.BOTTOM_TAB_MY_AP]: {
      initialRouteName: routes.HOME_MY_AP,
      screens: {
        [routes.HOME_SCREEN_MY_AP]: {
          screens: {
            [routes]: 'home',
          },
        },
        [routes.EVENT_MAIN]: {
          screens: {
            [routes.EVENT_SCREEN]: 'event',
          },
        },
        [routes.NOTIFICATION_MAIN]: {
          screens: {
            [routes.NOTIFICATION_SCREEN]: 'notification',
          },
        },
        [routes.PROFILE_MAIN]: {
          screens: {
            [routes.PROFILE_SCREEN]: 'profile',
          },
        },
      },
    },
    [routes.LOGIN_SCREEN]: 'login',
    [routes.EVENT_DETAIL]: {
      path: 'even_detail/:id/:idNoti',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

// https://www.youtube.com/watch?v=UwIzDBzaO3Q
// import React from 'react';
// import Feed from './src/feed';
// import Detail from './src/detail';

// import Contacts from './src/screens/drawer/Contacts';
// import Favorites from './src/screens/drawer/Favorites';
// import Settings from './src/screens/drawer/Settings';

// import Tab1 from './src/screens/tabs/Tab1';
// import Tab2 from './src/screens/tabs/Tab2';
// import Tab3 from './src/screens/tabs/Tab3';

// import {
//   NavigationContainer,
//   DarkTheme,
//   DrawerActions
// } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useColorScheme, AppearanceProvider } from 'react-native-appearance';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

// App = () => {

//   const colorScheme = useColorScheme();

//   const MyTheme = {
//     dark: false,
//     colors: {
//       primary: 'white',
//       background: 'white',
//       card: '#65509f',
//       text: 'white',
//       border: 'green',
//     },
//   }

//   const linking = {
//     prefixes: ['recipes://'],
//     config: {
//       screens: {
//         Feed: 'feed/:title',
//         Detail: 'detail/:foodName',
//         BottomTabs: {
//           path: 'bottom_tabs',
//           screens: {
//             Tab1: {
//               path: 'bTab1',
//               exact: true
//             },
//             Tab2: {
//               path: 'bTab2',
//               exact: true
//             },
//             Tab3: {
//               path: 'bTab3',
//               exact: true
//             }
//           }
//         },
//         TopTabs: {
//           path: 'top_tabs',
//           screens: {
//             Tab1: {
//               path: 'tTab1',
//               exact: true
//             },
//             Tab2: {
//               path: 'tTab2',
//               exact: true
//             },
//             Tab3: {
//               path: 'tTab3',
//               exact: true
//             }
//           }
//         },
//         Favorites: 'favorites/:user/:id',
//         Contacts: 'contacts/:user?',
//         Settings: {
//           path: 'settings/:color/:age/:isVerified',
//           parse: {
//             age: Number,
//             isVerified: Boolean,
//             color: (color) => `color-${color}`
//           }
//         }
//       }
//     }
//   }

//   createHomeStack = () =>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Feed"
//         children={this.createDrawer}
//         options={({ navigation }) => ({
//           title: "React Navigation",
//           headerLeft: () =>
//             <Icon
//               onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//               style={[{ color: 'white', marginLeft: 8 }]}
//               size={24}
//               name={'menu'}
//             />
//         })
//         }
//       />
//       <Stack.Screen
//         name="Detail"
//         component={Detail}
//         options={{
//           title: "Detail Screen"
//         }}
//       />
//       <Stack.Screen name="BottomTabs" component={BottomTabs} />
//       <Stack.Screen name="TopTabs" children={this.createTopTabs} />
//     </Stack.Navigator>

//   createDrawer = () =>
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Contacts" component={Contacts} />
//       <Drawer.Screen name="Favorites" component={Favorites} />
//       <Drawer.Screen name="Settings" component={Settings} />
//     </Drawer.Navigator>

//   createTopTabs = (props) => {
//     return <MaterialTopTabs.Navigator>
//       <MaterialTopTabs.Screen
//         name="Tab1"
//         component={Tab1}
//         options={{ title: props.route.params.name }}
//       />
//       <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
//       <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
//     </MaterialTopTabs.Navigator>
//   }

//   BottomTabs = () => {
//     return <MaterialBottomTabs.Navigator>
//       <MaterialBottomTabs.Screen
//         name="Tab1"
//         style={{ marginBottom: 16 }}
//         component={Tab1}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: () => (
//             <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
//           ),
//         }}
//       />
//       <MaterialBottomTabs.Screen name="Tab2" component={Tab2}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: () => (
//             <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
//           )
//         }}
//       />
//       <MaterialBottomTabs.Screen name="Tab3" component={Tab3}
//         options={{
//           tabBarLabel: 'Map',
//           tabBarIcon: () => (
//             <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
//           ),
//         }}
//       />
//     </MaterialBottomTabs.Navigator>
//   }

//   return (
//     <AppearanceProvider>
//       <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}
//         linking={linking}
//       >
//         {this.createHomeStack()}
//       </NavigationContainer>
//     </AppearanceProvider>
//   );
// }

// export default App;
