import React from 'react';
import {Block} from '@components';
import Header from './components/Header';
import {ScrollView} from 'react-native';
import ChartMoreMy from './components/ChartMoreMy';
import BodyEditMoreMy from '../EditMoreMyApp/components/BodyEditMoreMy';
import ItemMoreMy from './components/ItemMoreMy';
import ItemLastMoreMy from './components/ItemLastMoreMy';

const MoreMyApp = () => {
  return (
    <Block flex justifyCenter>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BodyEditMoreMy />
        <Header title={'Hồ sơ của bạn'} />
        <ItemMoreMy />
        <ChartMoreMy />
        <ItemLastMoreMy />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
