import {NavigationContainer} from '@react-navigation/native';
import {auth} from '@screens/Auth';
import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import BottomTabMyAp from './BottomTabMyAp';
import Login from '@screens/Auth/Login';
import Auth from '../screens/Auth';
import {useSelector} from 'react-redux';

export default function MainContainer() {
  const [isLogin, setIsLogin] = useState(true);
  const isLoginSelector = useSelector(state => state.login.data);

  useEffect(() => {
    if (isLoginSelector) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [isLoginSelector]);

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
