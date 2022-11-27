import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '@navigation/routes';
import Cart from './components/Cart';
import PaymentMethods from './PaymentMethods';
import DetailCart from './components/DetailCart';
import {PaymentScreen} from '@components';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const CartMyApNavigator = ({navigation, route}) => {
  // navigation.setOptions({tabBarVisible: false});
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={routes.CART_MY_AP}>
      <Stack.Screen name={routes.CART_MY_AP} component={Cart} />
      <Stack.Screen name={routes.DETAIL_CART} component={DetailCart} />
      <Stack.Screen name={routes.PAYMENT_METHODS} component={PaymentMethods} />
    </Stack.Navigator>
  );
};

export default CartMyApNavigator;
