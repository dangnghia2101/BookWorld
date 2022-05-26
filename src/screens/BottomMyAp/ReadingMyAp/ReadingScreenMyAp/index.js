import React from 'react';
import { Block, Text } from '@components';
import Header from 'common/Header';
import { theme } from '@theme';
import TapReadingStatus from '../components/TapReadingStatus';

const ReadingScreenMyAp = () => {
  return (
    <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
      <Header />
      <TapReadingStatus />
    </Block>
  );
};

export default ReadingScreenMyAp;
