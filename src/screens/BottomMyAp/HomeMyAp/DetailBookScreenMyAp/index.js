import React, { useState } from 'react';
import { Block } from '@components';
import { ScrollView, FlatList } from 'react-native';
import ImageBook from './components/ImageBook';
import IntroduceText from './components/IntroduceText';
import ChapterBook from './components/ChapterBook';

import { theme } from '@theme';
import Topbar from 'common/Topbar';

// const detailBook = {
//   name: 'Đầu sách',
//   evaluateBook: 3.4,
//   introduce: 'Gioi thieu sach',
//   chapter: [
//     {
//       id: 1,
//       name: 1,
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 2,
//       name: 2,
//       content: 'Noi dung chuong 2',
//     },
//     {
//       id: 3,
//       name: 'Chuong 1',
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 4,
//       name: 'Chuong 2',
//       content: 'Noi dung chuong 2',
//     },
//     {
//       id: 5,
//       name: 'Chuong 1',
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 6,
//       name: 'Chuong 2',
//       content: 'Noi dung chuong 2',
//     },
//     {
//       id: 7,
//       name: 'Chuong 1',
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 8,
//       name: 'Chuong 2',
//       content: 'Noi dung chuong 2',
//     },
//   ],
// };

const DetailBookScreenMyAp = ({ route }) => {
  const { bookmark } = route.params;
  console.log('route ', route.params);
  return (
    <Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
          <Topbar bookmark={bookmark} />
          <ImageBook item={route.params} />
          <IntroduceText item={route.params} />
          <ChapterBook detailBook={route.params?.chapter} />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default DetailBookScreenMyAp;
