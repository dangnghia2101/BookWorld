import React from 'react';
import {Block} from '@components';
import HeaderEditMoreMy from './components/HeaderEditMoreMy';
import {ScrollView} from 'react-native';
import ItemEditLastMoreMy from './components/ItemEditLastMoreMy';
import ItemEditMoreMy from './components/ItemEditMoreMy';
import BodyEditMoreMy from './components/BodyEditMoreMy';
const MoreMyApp = () => {
  return (
    <Block flex justifyCenter>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BodyEditMoreMy />
        <ItemEditMoreMy />
        <ItemEditLastMoreMy />
      </ScrollView>
      <HeaderEditMoreMy title={'Hồ sơ của bạn'} />
    </Block>
  );
};

export default MoreMyApp;
