import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Block, Text, Button} from '@components';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector} from '@hooks';
import {saveCartReducer} from '@redux/reducerNew/cartReducer';
import {saveChapterReducer} from '@redux/reducerNew/cartReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useAppDispatch} from 'hooks';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { routes } from '@navigation/routes';
import React, { useEffect, useState } from 'react';


const ChapterBook = ({ detailBook, nameBook, isRead, setIsRead,infoBook }) => {
  const navigation = useNavigation();
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const bookStore = useAppSelector(state => state.root.cart.cartList);
  const themeNew = useTheme(themeStore);
  const dispatch = useAppDispatch();
  const addCart = item => {
    console.log('................nó load lại nè', item.chapter);
    const data = {
      _id: infoBook._id,
      name: infoBook.name,
      isPrice: infoBook.isPrice,
      image: infoBook.image,
      chapter: [infoBook.element],
    };
    let co = 0;
    bookStore.map(item => {
      if (item._id === infoBook._id) {
        co = 1;
        return;
      }
    });
    if (co === 0) {
      dispatch(saveCartReducer(data));
      addChapter(item);
    }
  };
  const addChapter = chapter => {
    bookStore.map((item, index) => {
      if (item._id === infoBook._id) {
        const data = {
          _id: chapter._id,
          name: chapter.name,
          isPrice: chapter.isPrice,
        };
        console.log('>>>>>>>>>>>>>', data);
        dispatch(saveChapterReducer(data, index));
        return;
      }
    });
  };
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
      <Block>
        <TouchableOpacity onPress={addCart}>
          <Text>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </Block>
      <Block row width={'100%'} marginBottom={20} style={{flexWrap: 'wrap'}}>
        {data?.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate(routes.PLAY_BOOK_MY_AP, {item: item.element})
              console.log('........ đây là cái gì', item.element);
              addCart(item.element);
            }}
      // <Block row width={'100%'} marginBottom={20} style={{ flexWrap: 'wrap' }}>
      //   {data?.map((item, index) => (
      //     <TouchableOpacity
      //       onPress={() => {
      //         if (isRead) {
      //           navigation.navigate(routes.PLAY_BOOK_MY_AP,
      //             item.element,
      //           )
      //         } else {
      //           navigation.navigate(routes.LISTEN_BOOK, {
      //             item: item.element,
      //             nameBook: nameBook,
      //           })

      //         }
      //       }
      //       }
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
