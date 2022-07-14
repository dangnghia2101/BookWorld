import React from 'react';
import {Block} from '@components';
import HeaderEditMoreMy from './components/HeaderEditMoreMy';
import {ScrollView} from 'react-native';
import ItemEditLastMoreMy from './components/ItemEditLastMoreMy';
import ItemEditMoreMy from './components/ItemEditMoreMy';
import BodyEditMoreMy from './components/BodyEditMoreMy';
import {useDispatch, useSelector} from 'react-redux';

const MoreMyApp = () => {
  const myInfo = useSelector(state => state.login.data);
  return (
    <Block flex justifyCenter>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BodyEditMoreMy
          name={myInfo?.account?.name}
          image={myInfo?.account?.image}
          email={myInfo?.account?.email}
        />
        <ItemEditMoreMy />
        <ItemEditLastMoreMy />
      </ScrollView>
      <HeaderEditMoreMy title={'Hồ sơ của bạn'} />
    </Block>
  );
};

export default MoreMyApp;
