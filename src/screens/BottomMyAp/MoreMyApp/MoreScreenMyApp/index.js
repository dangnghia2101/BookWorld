import React from 'react';
import { Block } from '@components';
import Header from './components/Header';
import { ScrollView } from 'react-native';
import ChartMoreMy from './components/ChartMoreMy';
import BodyEditMoreMy from '../EditMoreMyApp/components/BodyEditMoreMy';
import ItemMoreMy from './components/ItemMoreMy';
import ItemLastMoreMy from './components/ItemLastMoreMy';
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
        <Header title={'Hồ sơ của bạn'} />
        <ItemMoreMy />
        <ChartMoreMy />
        <ItemLastMoreMy />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
