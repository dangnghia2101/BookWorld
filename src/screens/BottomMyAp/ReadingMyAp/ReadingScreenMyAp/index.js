import React from 'react';
import { Block, Text } from '@components';
import Header from 'common/Header';
import { theme } from '@theme';
import TapReadingStatus from '../components/TapReadingStatus';
import { makeStyles, useTheme } from 'themeNew';
import { useAppSelector } from '@hooks';
const ReadingScreenMyAp = () => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  return (
    <Block flex paddingHorizontal={20} backgroundColor={themeNew.colors.text}>
      <Header />
      <TapReadingStatus />
    </Block>
  );
};

export default ReadingScreenMyAp;
