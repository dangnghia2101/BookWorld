import React from 'react';
import {Block} from '@components';
import {ScrollView} from 'react-native';
import BodyChangeLanguage from './components/BodyChangeLanguage';
import HeaderChangeLanguage from './components/HeaderChangeLanguage';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';

const MoreMyApp = () => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const languageStore = useAppSelector(state => state.root.setting.language);
  const themeNew = useTheme(themeStore);
  return (
    <Block flex justifyCenter backgroundColor={themeNew.colors.text}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderChangeLanguage />
        <BodyChangeLanguage />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
