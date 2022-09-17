import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Block } from '@components';
import { theme } from '@theme';
import { width } from '@utils/responsive';
import ListBookOfAuthor from '../components/ListBookOfAuthor';
import { useSelector, useDispatch } from 'react-redux';
import actions from '@redux/actions';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import TabSceneReadingStatus from '../components/TabSceneReadingStatus';
const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const DetailAuthor = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const listBookOfAuthor = useSelector(state => state.getAllBookAuthor);

  useEffect(() => {
    dispatch({ type: actions.GET_ALL_BOOK_AUTHOR });
  }, []);

  const _renderItemBookOfAuthor = ({ item }) => {
    return <ListBookOfAuthor item={item} />;
  };

  return (
    <Block backgroundColor={theme.colors.white} flex>
      <Block width="100%" height="60%">
        <Block
          width="100%"
          height={371}
          backgroundColor={theme.colors.darkPurple}>
          <TouchableOpacity style={styles.iconBack}>
            <Image
              source={require('@assets/icons/iconback.png')}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </Block>
        <Block absolute top={158} left={91}>
          <Image
            style={styles.imgAuthor}
            source={require('@assets/images/imgAuthor.png')}
          />
        </Block>
        <Text style={styles.nameAuthor}>Johnny Dang</Text>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block width="100%" paddingHorizontal={24}>
          <Block>
            <Text style={styles.textIntro}>Giới thiệu về tác giả</Text>
            <Text style={styles.IntroduceAuthor} numberOfLines={2}>
              J.D. Salinger was an American writer, best known for his 1951
              novel The Catcher in the Rye. Before its publi cation, Salinger
              published several short stories in Story magazine xem thêm
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text style={styles.textIntro}>Tổng quan</Text>
            <Text style={styles.IntroduceAuthor} numberOfLines={4}>
              The Catcher in the Rye is a novel by J. D. Salinger, partially
              published in serial form in 1945–1946 and as a novel in 1951. It
              was originally intended for adu lts but is often read by
              adolescents for its theme of angst, alienation and as a critique
              xem thêm
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text style={styles.textIntro}>Thông tin liên hệ</Text>
            <Text style={styles.IntroduceAuthor}>Facebook: facebook..com</Text>
            <Text style={styles.IntroduceAuthor}>Youtube: youtube.com </Text>
            <Text style={styles.IntroduceAuthor}>Instagram: instagram</Text>
            <Text style={styles.IntroduceAuthor}>Number phone: 0977777777</Text>
          </Block>
          <Block marginTop={42}>
            <Text style={styles.textBook}>Sách của tác giả</Text>
            {/* <FlatList
              data={listBookOfAuthor?.data}
              keyExtractor={item => item._id}
              renderItem={_renderItemBookOfAuthor}
              ListEmptyComponent={
                <Block
                  width={width}
                  height={WIDTH_ITEM_INVIEW}
                  justifyCenter
                  alignCenter>
                  <Text>Chưa có sach</Text>
                </Block>
              } */}
            <TabSceneReadingStatus route={route} />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default DetailAuthor;

const styles = StyleSheet.create({
  // listBookOfAuthor: {
  //   height: 500,
  // },
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
    left: '32.04%',
    top: '90%',
    color: 'black',
  },
  iconBack: {
    position: 'absolute',
    top: '10%',
    left: '6%',
  },
});
