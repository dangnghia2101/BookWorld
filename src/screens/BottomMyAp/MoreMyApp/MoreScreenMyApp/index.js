import React from 'react';
import { Block } from '@components';
import { ScrollView } from 'react-native';
import Header from './components/Header';
import ChartMoreMy from './components/ChartMoreMy';
import BodyEditMoreMy from '../EditMoreMyApp/components/BodyEditMoreMy';
import ItemMoreMy from './components/ItemMoreMy';
import ItemLastMoreMy from './components/ItemLastMoreMy';
// import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from 'hooks';
import { makeStyles, useTheme } from 'themeNew';

const MoreMyApp = props => {
  const myInfo = useAppSelector(state => state.root.auth);
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);

  return (
    <Block flex justifyCenter backgroundColor={themeNew.colors.text}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Hồ sơ của bạn'} />
        <Header />
        <BodyEditMoreMy
          name={myInfo?.name}
          image={myInfo?.image}
          email={myInfo?.email}
        />
        <ItemMoreMy />
        <ChartMoreMy />
        <ItemLastMoreMy />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
