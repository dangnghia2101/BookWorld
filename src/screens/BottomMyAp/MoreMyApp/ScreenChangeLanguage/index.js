import React from 'react';
import {Block} from '@components';
import {ScrollView} from 'react-native';
import BodyChangeLanguage from './components/BodyChangeLanguage';
import HeaderChangeLanguage from './components/HeaderChangeLanguage';
const MoreMyApp = () => {
  return (
    <Block flex justifyCenter>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderChangeLanguage title={'Ngôn ngữ'} />
        <BodyChangeLanguage />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
