import React from 'react';
import {Block} from '@components';
import {ScrollView} from 'react-native';
import HeaderThemeMode from './components/HeaderThemeMode';
import BodyThemeMode from './components/BodyThemoMode';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';

const MoreMyApp = () => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);

  return (
    <Block flex justifyCenter backgroundColor={themeNew.colors.text}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderThemeMode />
        <BodyThemeMode />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
