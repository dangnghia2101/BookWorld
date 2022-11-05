import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '@navigation/routes';
import HomeScreenMyAp from './HomeScreenMyAp';
import DetailBookScreenMyAp from './DetailBookScreenMyAp';
import PlayBookScreenMyAp from './PlayBookScreenMyAp';
import BooksByCategory from './BooksByCategory';
import { ListenBook } from './ListenBook';
import Payment from './components/Payment';
import ScreenNotification from '../MoreMyApp/UpdateProfile/Nitification/ScreenNotification';
import Search from './Search';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeMyApNavigator = ({ navigation, route }) => {
  // navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={routes.HOME_SCREEN_MY_AP}>
      <Stack.Screen
        name={routes.HOME_SCREEN_MY_AP}
        component={HomeScreenMyAp}
      />
      <Stack.Screen
        name={routes.DETAIL_BOOK_MY_AP}
        component={DetailBookScreenMyAp}
      />
      <Stack.Screen
        name={routes.PLAY_BOOK_MY_AP}
        component={PlayBookScreenMyAp}
      />
      <Stack.Screen name={routes.LISTEN_BOOK} component={ListenBook} />
      <Stack.Screen name={routes.SCREEN_PAYMENT} component={Payment} />
      <Stack.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={ScreenNotification}
      />
      <Stack.Screen name={routes.BOOKS_BY_CATEGORY} component={BooksByCategory} />
      <Stack.Screen name={routes.SEARCH} component={Search} />
    </Stack.Navigator>
  );
};

export default HomeMyApNavigator;
