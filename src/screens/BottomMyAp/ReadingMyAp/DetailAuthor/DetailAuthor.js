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
import BookOfAuthor from '../components/BookOfAuthor';
const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const DetailAuthor = ({ route, t }) => {
  let item = route.params.item;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block backgroundColor={themeNew.colors.background} flex>
        <TopBar isBackHeader />
        <Block relative width="100%" height="40%">
          <Block
            width="100%"
            height={'50%'}
            backgroundColor={theme.colors.darkPurple}>
          </Block>
          <Block width={'70%'} height={'60%'} absolute top={50} left={90} >
            <Image
              style={styles.imgAuthor}
              source={{ uri: item.avatar }}
            />
          </Block>
          <Text fontType='bold1' color={themeNew.colors.textInBox} style={styles.nameAuthor}>{item.name}</Text>
        </Block>

        <Block paddingHorizontal={24}>
          <Block>
            <Text fontType='bold1' color={themeNew.colors.textInBox} style={styles.textIntro}>{t('aboutAuthor')}</Text>
            <Text fontType='medium1' color={themeNew.colors.textInBox} style={styles.IntroduceAuthor} numberOfLines={2}>
              {item.aboutAuthor.introduce}
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text fontType='bold1' color={themeNew.colors.textInBox} style={styles.textIntro}>{t('overview')}</Text>
            <Text fontType='medium1' color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>
              {item.aboutAuthor.details}
            </Text>
          </Block>
          <Block marginTop={18}>
            <Text fontType='bold1' color={themeNew.colors.textInBox} style={styles.textIntro}>{t('contactInfo')}</Text>
            <Text fontType='medium1' color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>Facebook: {item.aboutAuthor.faceBook}</Text>
            <Text fontType='medium1' color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>Youtube: {item.aboutAuthor.youtube} </Text>
            <Text fontType='medium1' color={themeNew.colors.textInBox} style={styles.IntroduceAuthor}>Instagram: {item.aboutAuthor.instagram}</Text>
          </Block>
        </Block>

      </Block>

      <Block marginTop={400} bottom={20}>
        <Text marginHorizontal={20} fontType='bold1' color={themeNew.colors.textInBox} style={styles.textBook}>{t('bookOfAuthor')}</Text>
        <BookOfAuthor />
        {/* <TabSceneReadingStatus /> */}
      </Block>
    </ScrollView>
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
    fontSize: 24,
  },
  IntroduceAuthor: {
    lineHeight: 21,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 6,
  },
  textIntro: {
    fontSize: 18,
    lineHeight: 27,
  },
  nameAuthor: {
    position: 'absolute',
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
