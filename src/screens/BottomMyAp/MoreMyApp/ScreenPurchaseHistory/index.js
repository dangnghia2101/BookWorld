import React from 'react';
import {Block} from '@components';
import {ScrollView} from 'react-native';
import HeaderPurchase from './components/HeaderPurchase';
import ChartPurchase from './components/ChartPurchase.';
import BodyPurchaseHistory from './components/BodyPurchaseHistory';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';

const MoreMyApp = props => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  return (
    <Block flex justifyCenter backgroundColor={themeNew.colors.text}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderPurchase />
        <ChartPurchase />
        <BodyPurchaseHistory />
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;
