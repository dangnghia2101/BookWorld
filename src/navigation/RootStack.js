import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import BottomTabMyAp from './BottomTabMyAp';
import Auth from '../screens/Auth';
import { useSelector, useDispatch } from 'react-redux';
import Storage from '@utils/storage';
import actions, { _onSuccess } from '@redux/actions';
import { SHOW, HIDE } from '@redux/actions/HandlerLoading';

export default function MainContainer() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const isLoginSelector = useSelector(state => state.login.data);

  useEffect(() => {
    if (isLoginSelector) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLoginSelector]);

  useEffect(() => {
    dispatch({ type: SHOW });
    Storage.getItem('tokenId').then(item => {
      if (item !== null) {
        setIsLogin(true);
        dispatch({ type: _onSuccess(actions.LOGIN), data: item.data });
        dispatch({ type: _onSuccess(actions.IS_LOGIN), data: true });
      } else {
        setIsLogin(false);
      }
      dispatch({ type: HIDE });
    });

    // GET THEME APP
    Storage.getItem('theme').then(item => {
      if (item === null) {
        dispatch({ type: actions.CHANGE_THEME, theme: 'light' });
      } else {
        dispatch({ type: actions.CHANGE_THEME, theme: item });
      }
    });
  }, [dispatch]);

  return (
    <>
      <NavigationContainer>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        {isLogin ? <BottomTabMyAp /> : <BottomTabMyAp />}
      </NavigationContainer>
    </>
  );
}
