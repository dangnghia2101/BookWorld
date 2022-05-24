import React from 'react';
import {Block} from '@components';
import Header from './components/Header';
import {ScrollView} from 'react-native';
import BodyMoreMy from './components/BodyMoreMy';
import ItemMoreMy from './components/ItemMoreMy';
import ItemLastMoreMy from './components/ItemLastMoreMy';

const MoreMyApp = () => {
  return (
    <Block flex justifyCenter>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Thông tin cá nhân'} />
        <BodyMoreMy />
        <ItemMoreMy />
        <ItemLastMoreMy />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
