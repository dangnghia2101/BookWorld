import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Block, Text, Button } from '@components';
import React from 'react';
import { theme } from '@theme';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@navigation/routes';
import { makeStyles, useTheme } from 'themeNew';
import { useAppSelector } from '@hooks';
import { withNamespaces } from 'react-i18next';

const ChapterBook = ({ detailBook, t }) => {
  const navigation = useNavigation();
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  return (
    <Block marginHorizontal={10}>
      <Text
        marginTop={20}
        color={themeNew.colors.textInBox}
        fontType={'bold'}
        size={20}>
        {t('episode')}
      </Text>
      <Block row width={'100%'} marginBottom={20} style={{ flexWrap: 'wrap' }}>
        {detailBook?.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routes.PLAY_BOOK_MY_AP, { item: item })
            }
            style={styles.button}>
            <Text>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '18%',
    backgroundColor: theme.colors.gray4,
    borderRadius: 5,
    paddingHorizontal: 5,
    margin: 3,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withNamespaces()(ChapterBook);
