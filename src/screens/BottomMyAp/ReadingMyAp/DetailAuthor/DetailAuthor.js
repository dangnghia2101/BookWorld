import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Block } from '@components';
import TopBar from '../components/TopBar';
import { theme } from '@theme';
import { width } from '@utils/responsive';
import { useNavigation } from '@react-navigation/core';
import TabSceneReadingStatus from '../components/TabSceneReadingStatus';
import { useAppSelector } from '@hooks';
import { makeStyles, useTheme } from 'themeNew';
import { useGetFavoriteBookQuery } from '@redux/servicesNew'
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook';
import BookOfauthor from '../components/BookOfAuthor';

const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const DetailAuthor = ({ route }) => {
  let item = route.params.item;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);

  return (
    <Block backgroundColor={theme.colors.grey16} flex>
      <ScrollView>
        <TopBar isBackHeader />
        <Block width="100%" height="15%">
          <Block
            width="100%"
            height={'50%'}
            backgroundColor={theme.colors.darkPurple}>
          </Block>
          <Block width={'75%'} height={'60%'} absolute top={65} left={70} >
            <Image
              style={styles.imgAuthor}
              source={{ uri: item.avatar }}
            />
          </Block>
          <Text style={styles.nameAuthor}>{item.name}</Text>
        </Block>
        <Block width="100%" paddingHorizontal={24}>
          <Block>
            <Text style={styles.textIntro}>Giới thiệu về tác giả</Text>
            <Text style={styles.IntroduceAuthor} numberOfLines={2}>
              {item.aboutAuthor.introduce}
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text style={styles.textIntro}>Tổng quan</Text>
            <Text style={styles.IntroduceAuthor}>
              {item.aboutAuthor.details}
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text style={styles.textIntro}>Thông tin liên hệ</Text>
            <Text style={styles.IntroduceAuthor}>Facebook: facebook..co m</Text>
            <Text style={styles.IntroduceAuthor}>Youtube: youtube.com </Text>
            <Text style={styles.IntroduceAuthor}>Instagram: instagram</Text>
            <Text style={styles.IntroduceAuthor}>Number phone: 0977777777</Text>
          </Block>
          <Block marginTop={42}>
            <Text style={styles.textBook}>Sách của tác giả</Text>
            {/* <FlatList
              data={data}
              keyExtractor={item => item._id}
              renderItem={item => <ItemCateBook item={item.item} />}
              ListEmptyComponent={
                <Block
                  width={width}
                  height={WIDTH_ITEM_INVIEW}
                  justifyCenter
                  alignCenter>
                  <Text>Chưa có sach</Text>
                </Block>
              } /> */}
            <BookOfauthor />
            {/* <TabSceneReadingStatus /> */}
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default DetailAuthor;

const styles = StyleSheet.create({

  imgAuthor: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  textBook: {
    lineHeight: 36,
    fontWeight: '600',
    fontSize: 24,
    color: '#19191B',
  },
  IntroduceAuthor: {
    lineHeight: 21,
    fontWeight: '400',
    fontSize: 14,
    color: '#9D9D9D',
    marginTop: 6,
  },
  textIntro: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#19191B',
  },
  nameAuthor: {
    position: 'absolute',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    left: '32%',
    top: '76%',
    color: 'black',
  },
  iconBack: {
    position: 'absolute',
    top: '10%',
    left: '6%',
  },
});
