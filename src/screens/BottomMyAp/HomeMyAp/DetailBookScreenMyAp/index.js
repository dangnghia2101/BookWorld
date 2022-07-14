import React, {useEffect, useState} from 'react';
import {Block} from '@components';
import {ScrollView, FlatList} from 'react-native';
import ImageBook from './components/ImageBook';
import IntroduceText from './components/IntroduceText';
import ChapterBook from './components/ChapterBook';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import {theme} from '@theme';
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

const DetailBookScreenMyAp = ({route}) => {
  const {bookmark} = route.params;
  const dispatch = useDispatch();
  const listChapters = useSelector(item => item.getAllChapterBookById);

  useEffect(() => {
    dispatch({
      type: actions.GET_ALL_CHAPTER_BY_ID,
      dody: bookmark.item,
    });
  }, []);

  return (
    <Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
          <Topbar bookmark={bookmark} />
          <ImageBook item={route.params} />
          <IntroduceText item={route.params} />
          <ChapterBook detailBook={listChapters?.data} />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default DetailBookScreenMyAp;
