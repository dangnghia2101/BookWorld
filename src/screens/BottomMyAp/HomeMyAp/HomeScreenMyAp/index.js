import React, { useEffect, useCallback, useState } from 'react';
import { Block, Text } from '@components';
import {
  ScrollView,
  Animated,
  Platform,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import HeaderListBook from './components/HeaderListEvent';
import { FlatList } from 'react-native-gesture-handler';
import { width, height } from '@utils/responsive';
import ItemMostBookRead from './components/ItemMostBookRead';
import TabCategoryBook from './components/TabCategoryBook';
import { theme } from '@theme';
import HeaderHome from './components/HeaderHome';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@redux/actions';
import LinearGradient from 'react-native-linear-gradient';

const ITEM_WITH = width * 0.6;

const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;
const BACKDROP_HEIGHT = height * 0.65;

const author = [
  { _id: 1, image: 'http://encyclopediaofalabama.org/images/m-2477.jpg' },
  { _id: 2, image: 'https://bnnfeed.com/wp-content/uploads/2021/02/186.jpg' },
  {
    _id: 3,
    image:
      'https://scontent.fsgn12-1.fna.fbcdn.net/v/t1.6435-9/160623841_274437330713385_6140920492295108645_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_vbpplnTIi0AX96j1ta&_nc_ht=scontent.fsgn12-1.fna&oh=00_AT_iTkUVCSh_novn6Ee7b8zJ_mRFA4Q1-387Kcu4fPKDxg&oe=63011824',
  },
  {
    _id: 4,
    image:
      'https://static01.nyt.com/images/2016/10/17/t-magazine/zadie-smith-slide-NRAT/zadie-smith-slide-NRAT-jumbo.jpg',
  },
  { _id: 5, image: 'https://bnnfeed.com/wp-content/uploads/2021/02/186.jpg' },
  { _id: 6, image: 'https://bnnfeed.com/wp-content/uploads/2021/02/186.jpg' },
  { _id: 7, image: 'https://bnnfeed.com/wp-content/uploads/2021/02/186.jpg' },
];

const HomeScreenMyAp = () => {
  // const [clicked, setClicked] = useState(false);
  // const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();

  const listMostReadBook = useSelector(state => state.getAllBook);
  const listCategoryBook = useSelector(state => state.getAllCategory);
  const changeTheme = useSelector(state => state.changeTheme);
  const [isCollapsible, setIsCollapsible] = useState(true);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const myInfo = useSelector(state => state.login.data);

  useEffect(() => {
    dispatch({ type: actions.GET_ALL_BOOK });
    dispatch({ type: actions.GET_ALL_AUTHOR });
    dispatch({ type: actions.GET_ALL_CATEGORY });
  }, [dispatch]);

  const _renderItemMostBookRead = useCallback(
    ({ item, index }) => {
      return (
        <ItemMostBookRead
          item={item}
          index={index}
          scrollX={scrollX}
          size={listMostReadBook.size}
        />
      );
    },
    [listMostReadBook.size, scrollX],
  );

  const renderListMostRead = useCallback(() => {
    return (
      <Block height={height * 0.65}>
        <Animated.FlatList
          data={listMostReadBook?.data}
          keyExtractor={item => item._id}
          renderItem={_renderItemMostBookRead}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          renderToHardwareTextureAndroid
          contentContainerStyle={{ alignItems: 'center' }}
          bounces={false}
          removeClippedSubviews={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WITH}
          snapToAlignment="start"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={16}
          ListEmptyComponent={
            <Block
              width={width}
              height={WIDTH_ITEM_INVIEW}
              justifyCenter
              alignCenter>
              <Text>Chưa có sach</Text>
            </Block>
          }
        />
      </Block>
    );
  }, [_renderItemMostBookRead, listMostReadBook?.data, scrollX]);

  const renderListCategory = useCallback(() => {
    return (
      <Block height={650}>
        {listCategoryBook?.data?.length > 0 ? (
          <TabCategoryBook />
        ) : (
          <Text>Loading</Text>
        )}
      </Block>
    );
  }, [listCategoryBook]);

  const Backdrop = () => {
    return (
      <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
        <FlatList
          data={author}
          keyExtractor={(item, index) => item._id + '-backdrop'}
          removeClippedSubviews={false}
          contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
          renderItem={({ item, index }) => {
            // console.log("+====", item);
            // if (!item.backdrop) {
            //   return null;
            // }
            const translateX = scrollX.interpolate({
              inputRange: [(index - 2) * ITEM_WITH, (index - 1) * ITEM_WITH],
              outputRange: [0, width],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                removeClippedSubviews={false}
                style={{
                  position: 'absolute',
                  width: translateX,
                  height,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width,
                    height: BACKDROP_HEIGHT,
                    position: 'absolute',
                    top: -40,
                  }}
                />
              </Animated.View>
            );
          }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'white']}
          style={styles.linearGradient}
        />
      </View>
    );
  };

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ position: 'relative' }}>
        <HeaderHome
          name={myInfo?.account?.name}
          image={myInfo?.account?.image}
          setIsCollapsible={setIsCollapsible}
          isCollapsible={isCollapsible}
        />
        <Block marginTop={75}>
          <HeaderListBook title={'Sách xem nhiều nhất'} />
          {Backdrop()}
          {renderListMostRead()}
          {renderListCategory()}
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 200,
    width: width,
    position: 'absolute',
    bottom: 40,
  },
});

export default HomeScreenMyAp;
