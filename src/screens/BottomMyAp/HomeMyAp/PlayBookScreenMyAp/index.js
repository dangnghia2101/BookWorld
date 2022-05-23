import React, {useState} from 'react';
import {Block, Text} from '@components';
import {ScrollView} from 'react-native';

import {theme} from '@theme';
import Topbar from 'common/Topbar';

const PlayBookScreenMyAp = ({route}) => {
  const {bookmark} = route.params;
  console.log('route ', route.params);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>fd</Text>
    </ScrollView>
  );
};

export default PlayBookScreenMyAp;
