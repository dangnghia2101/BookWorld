import {
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Block, Text } from '@components';
import TopBar from '../components/TopBar';
import { theme } from '@theme';
import { width } from '@utils/responsive';
import { useNavigation } from '@react-navigation/core';
import TabSceneReadingStatus from '../components/TabSceneReadingStatus';
import { useAppSelector } from '@hooks';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';

const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const DetailAuthor = ({ route, t }) => {
  let item = route.params.item;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);

  return (
    <Block backgroundColor={themeNew.colors.background} flex>
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
          <Text color={themeNew.colors.textInBox} style={styles.nameAuthor}>{item.name}</Text>
        </Block>
        <Block width="100%" paddingHorizontal={24}>
          <Block>
            <Text color={themeNew.colors.textInBox} style={styles.textIntro}>{t('aboutAuthor')}</Text>
            <Text color={themeNew.colors.textInBox} style={styles.IntroduceAuthor} numberOfLines={2}>
              {item.aboutAuthor.introduce}
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text color={themeNew.colors.textInBox} style={styles.textIntro}>{t('overview')}</Text>
            <Text color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>
              {item.aboutAuthor.details}
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text color={themeNew.colors.textInBox} style={styles.textIntro}>{t('contactInfo')}</Text>
            <Text color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>Facebook: facebook..co m</Text>
            <Text color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>Youtube: youtube.com </Text>
            <Text color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>Instagram: instagram</Text>
            <Text color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>Number phone: 0977777777</Text>
          </Block>
          <Block marginTop={42}>
            <Text color={themeNew.colors.textInBox} style={styles.textBook}>{t('bookOfAuthor')}</Text>
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
            {/* <BookOfauthor /> */}
            <TabSceneReadingStatus />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default withNamespaces()(DetailAuthor);

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
  },
  nameAuthor: {
    position: 'absolute',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    left: '32%',
    top: '76%',
  },
  iconBack: {
    position: 'absolute',
    top: '10%',
    left: '6%',
  },
});
