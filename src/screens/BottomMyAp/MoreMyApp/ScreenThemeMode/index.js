import React from 'react';
import {Block} from '@components';
import {ScrollView} from 'react-native';
import HeaderThemeMode from './components/HeaderThemeMode';
import BodyThemeMode from './components/BodyThemoMode';
const MoreMyApp = () => {
  return (
    <Block flex justifyCenter>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderThemeMode title={'Giao diện tối'} />
        <BodyThemeMode />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
