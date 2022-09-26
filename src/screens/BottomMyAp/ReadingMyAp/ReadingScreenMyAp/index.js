import React from 'react';
import { Block, Text } from '@components';
import Header from 'common/Header';
import TapReadingStatus from '../components/TapReadingStatus';
import { useTheme } from 'themeNew';
import { useAppSelector } from '@hooks';
const ReadingScreenMyAp = () => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);
  return (
    <Block flex paddingHorizontal={20} backgroundColor={theme.colors.text}>
      <Header />
      <TapReadingStatus />
    </Block>
  );
};

export default ReadingScreenMyAp;
