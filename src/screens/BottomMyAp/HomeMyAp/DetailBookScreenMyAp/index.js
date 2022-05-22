import React, {useState} from 'react';
import {Block} from '@components';
import {ScrollView} from 'react-native';
import ImageBook from './components/ImageBook';
import IntroduceText from './components/IntroduceText';
import EvaluateBook from './components/EvaluateBook';

import {theme} from '@theme';
import Topbar from 'common/Topbar';

const DetailBookScreenMyAp = ({route}) => {
  const {bookmark} = route.params;
  console.log('route ', route.params);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
        <Topbar bookmark={bookmark} />
        <ImageBook item={route.params} />
        <IntroduceText item={route.params} />
        <EvaluateBook />
      </Block>
    </ScrollView>
  );
};

export default DetailBookScreenMyAp;
