import { Block, Text, Button } from '@components';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useAppSelector } from '@hooks';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'themeNew';
const ChapterBook = ({ detailBook, nameBook, isRead, setIsRead }) => {
  const navigation = useNavigation();
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isRead) {
      setData(detailBook?.filter(item => item.element?.htmlChapter !== ''))
    } else {
      setData(detailBook?.filter(item => item.element?.audio !== ''))
    }
  }, [detailBook, isRead])

  return (
    <Block width={WINDOW_WIDTH - 50} alignSelf='center'>
      <Block width={200} row alignSelf='center' marginTop={30} justifyCenter >
        <Button onPress={() => setIsRead(true)}>
          <Block backgroundColor={isRead ? themeNew.colors.primary : themeNew.colors.grey14} paddingHorizontal={15} paddingVertical={5} style={styles.containerTabLeft}>
            <Text
              color={isRead ? themeNew.colors.text : themeNew.colors.grey10}
              fontType={'bold'}
              size={12}>
              Sach doc
            </Text>
          </Block>
        </Button>
        <Button onPress={() => setIsRead(false)}>
          <Block backgroundColor={isRead ? themeNew.colors.grey14 : themeNew.colors.primary} paddingHorizontal={15} paddingVertical={5} style={styles.containerTabRight}>
            <Text
              color={!isRead ? themeNew.colors.text : themeNew.colors.grey10}
              fontType={'bold'}
              size={12}>
              Sach Nghe
            </Text>
          </Block>
        </Button>
      </Block>
      <Text
        marginTop={5}
        color={themeNew.colors.textInBox}
        fontType={'bold'}
        size={20}>
        Tập
      </Text>
      <Block row width={'100%'} marginBottom={20} style={{ flexWrap: 'wrap' }}>
        {data?.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              if (isRead) {
                navigation.navigate(routes.PLAY_BOOK_MY_AP,
                  item.element,
                )
              } else {
                navigation.navigate(routes.LISTEN_BOOK, {
                  item: item.element,
                  nameBook: nameBook,
                })

              }
            }
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
  containerTabLeft: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  containerTabRight: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  }
});

export default ChapterBook;
