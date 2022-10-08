import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Block, Text, Button } from '@components';
import React from 'react';
import { theme } from '@theme';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@navigation/routes';
import { makeStyles, useTheme } from 'themeNew';
import { useAppSelector } from '@hooks';
const ChapterBook = ({ detailBook }) => {
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
        Tập
      </Text>
      <Block row width={'100%'} marginBottom={20} style={{ flexWrap: 'wrap' }}>
        {detailBook?.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routes.PLAY_BOOK_MY_AP, { item: item.element })
            }
            style={styles.button}>
            <Block
              alignCenter
              justifyCenter
              radius={5}
              width={'100%'}
              backgroundColor={
                item.ispay ? themeNew.colors.primary : themeNew.colors.grey12
              }
              paddingVertical={10}
              paddingHorizontal={5}>
              <Text>{index + 1}</Text>
            </Block>
          </TouchableOpacity>
        ))}
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '18%',
    margin: 3,
  },
});

export default ChapterBook;
