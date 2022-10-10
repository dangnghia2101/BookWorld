import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Block, Text, Button} from '@components';
import React from 'react';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector} from '@hooks';
import {saveCartReducer} from '@redux/reducerNew/cartReducer';
import {saveChapterReducer} from '@redux/reducerNew/cartReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useAppDispatch} from 'hooks';

const ChapterBook = ({detailBook, infoBook}) => {
  const navigation = useNavigation();
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const bookStore = useAppSelector(state => state.root.cart.cartList);
  const themeNew = useTheme(themeStore);
  const dispatch = useAppDispatch();
  const addCart = item => {
    console.log('................nó load lại nè');
    const data = {
      _id: infoBook._id,
      name: infoBook.name,
      isPrice: infoBook.isPrice,
      image: infoBook.image,
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
        dispatch(saveChapterReducer(data, index));
        return;
      }
    });
  };
  return (
    <Block marginHorizontal={10}>
      <Text
        marginTop={20}
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
        {detailBook?.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate(routes.PLAY_BOOK_MY_AP, {item: item.element})
              console.log('........ đây là cái gì', item);
              addCart(item.element);
            }}
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
