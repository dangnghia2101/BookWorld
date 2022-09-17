import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import BottomTabMyAp from './BottomTabMyAp';
import Auth from '../screens/Auth';
import Storage from '@utils/storage';
import { SHOW, HIDE } from '@redux/actions/HandlerLoading';
import { useAppSelector } from 'hooks';

export default function MainContainer() {
  // const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const isLoginSelector = useAppSelector(state => state.root.auth.isLogin);

  useEffect(() => {
    if (isLoginSelector) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLoginSelector]);

  useEffect(() => {
    // dispatch({ type: SHOW });
    Storage.getItem('tokenId').then(item => {
      if (item !== null) {
        setIsLogin(true);
        // dispatch({ type: _onSuccess(actions.LOGIN), data: item.data });
        // dispatch({ type: _onSuccess(actions.IS_LOGIN), data: true });
      } else {
        setIsLogin(false);
      }
      // dispatch({ type: HIDE });
    });

    // GET THEME APP
    // Storage.getItem('theme').then(item => {
    //   if (item === null) {
    //     dispatch({ type: actions.CHANGE_THEME, theme: 'light' });
    //   } else {
    //     dispatch({ type: actions.CHANGE_THEME, theme: item });
    //   }
    // });
  }, []);

  return (
    <>
      <NavigationContainer>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        {!isLoginSelector ? <Auth /> : <BottomTabMyAp />}
      </NavigationContainer>
    </>
  );
}
