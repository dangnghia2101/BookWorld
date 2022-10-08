import { Block } from '@components';
import { useAppSelector } from '@hooks';
import { useGetAllChapterBookMutation } from '@redux/servicesNew';
import { theme } from '@theme';
import Topbar from 'common/Topbar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ChapterBook from './components/ChapterBook';
import ImageBook from './components/ImageBook';
import IntroduceText from './components/IntroduceText';

const DetailBookScreenMyAp = ({ route }) => {
  const { bookmark, item } = route.params;
  const [listChapters, setListChapters] = useState([]);

  const myInfo = useAppSelector(state => state.root.auth);

  const [getAllChapterBook] = useGetAllChapterBookMutation();

  useEffect(() => {
    async function fetchAPI() {
      if (item._id) {
        const params = {
          id: item._id,
          idUser: myInfo._id,
        };
        const data = await getAllChapterBook(params);
        setListChapters(data.data);
      }
    }
    fetchAPI();
  }, [getAllChapterBook, item._id, myInfo._id]);

  return (
    <Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
          <Topbar bookmark={bookmark} />
          <ImageBook item={route.params} />
          <IntroduceText item={route.params} />
          <ChapterBook detailBook={listChapters} />
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});

export default DetailBookScreenMyAp;
