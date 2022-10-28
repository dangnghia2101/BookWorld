import { Block, Container, Text } from '@components';
import { useGetAllBookQuery, useGetAllCategoryQuery, useGetAllAuthorQuery } from '@redux/servicesNew';
import { height, width } from '@utils/responsive';
import { useAppSelector } from 'hooks';
import React, { useCallback, useState } from 'react';
import { withNamespaces } from 'react-i18next';
import {
  Animated, Image, LogBox,
  Platform,
  ScrollView,
  TextInput
} from 'react-native';
import { makeStyles, useTheme } from 'themeNew';
import HeaderHome from './components/HeaderHome';
import HeaderListBook from './components/HeaderListEvent';
import ItemBookFree from './components/ItemBookFree';
import ItemCategory from './components/ItemCategory';
import ItemMostBookRead from './components/ItemMostBookRead';
import ItemAuthor from './components/ItemAuthor';
import { images } from '@assets';

LogBox.ignoreAllLogs();
const ITEM_WITH = width * 0.6;

const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const listTopAuthor = [
  {
    "_id": "63441225c532a4c786a3fda5",
    "name": "abcd",
    "email": "phucho1907@gmail.com",
    "phone": " ",
    "permission": "author",
    "fcmtokens": [

    ],
    "image": "https://res.cloudinary.com/cao-ng-fpt-polytechnic/image/upload/v1666510883/nkfmf4vvwj5gypulp3vm.png"
  },
  {
    "_id": "63441225c532a4c786a3fda32",
    "name": "abcd",
    "email": "phucho1907@gmail.com",
    "phone": " ",
    "permission": "author",
    "fcmtokens": [

    ],
    "image": "https://res.cloudinary.com/cao-ng-fpt-polytechnic/image/upload/v1666510883/nkfmf4vvwj5gypulp3vm.png"
  }
]

const HomeScreenMyAp = () => {

  useGetAllBookQuery();
  useGetAllCategoryQuery();

  const [isCollapsible, setIsCollapsible] = useState(true);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const myInfo = useAppSelector(state => state.root.auth);
  const allBooks = useAppSelector(state => state.root.book.bookList);
  const allCategories = useAppSelector(state => state.root.book.categoryList);
  const themeStore = useAppSelector(state => state.root.themeApp.theme);

  const theme = useTheme(themeStore);
  const styles = useStyle(themeStore);

  //Cập nhật mỗi lần thay đổi TabView


  const _renderItemMostBookRead = useCallback(
    ({ item, index }) => {
      return (
        <ItemMostBookRead
          item={item}
          index={index}
          scrollX={scrollX}
          size={allBooks}
        />
      );
    },
    [allBooks, scrollX],
  );

  const renderListMostRead = useCallback(() => {
    return (
      <Block height={height * 0.6} backgroundColor={theme.colors.grey14}>
        <Animated.FlatList
          data={allBooks}
          keyExtractor={item => Math.random() + item._id}
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
          nestedScrollEnabled={true}
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
  }, [_renderItemMostBookRead, allBooks, scrollX]);


  const renderListCategory = useCallback(() => {
    return (
      <Block >
        <HeaderListBook title={'Thể loại sách'} />

        <Animated.FlatList
          data={allCategories}
          keyExtractor={item => Math.random() + item._id}
          renderItem={(item) => <ItemCategory item={item} />}
          bounces={true}
          numColumns={4}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          ListEmptyComponent={
            <Block
              width={width}
              height={WIDTH_ITEM_INVIEW}
              justifyCenter
              alignCenter>
              <Text>Loading...</Text>
            </Block>
          }
        />
      </Block>
    );
  }, [_renderItemMostBookRead, allBooks, scrollX]);


  const renderListBookFree = useCallback(() => {
    return (
      <Block >
        <HeaderListBook title={'Sách miễn phí'} action={() => { }} />
        <Animated.FlatList
          data={allBooks}
          keyExtractor={item => Math.random() + item._id}
          renderItem={(item) => <ItemBookFree item={item.item} />}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          ListEmptyComponent={
            <Block
              width={width}
              height={WIDTH_ITEM_INVIEW}
              justifyCenter
              alignCenter>
              <Text>Loading...</Text>
            </Block>
          }
        />
      </Block>
    );
  }, [_renderItemMostBookRead, allBooks, scrollX]);

  const renderListTopAuthor = useCallback(() => {
    return (
      <Block >
        <HeaderListBook title={'Tác giả hàng đầu'} action={() => { }} />
        <Animated.FlatList
          data={listTopAuthor}
          keyExtractor={item => Math.random() + item._id}
          renderItem={(item) => <ItemAuthor item={item.item} />}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          ListEmptyComponent={
            <Block
              width={width}
              height={WIDTH_ITEM_INVIEW}
              justifyCenter
              alignCenter>
              <Text>Loading...</Text>
            </Block>
          }
        />
      </Block>
    );
  }, [_renderItemMostBookRead, allBooks, scrollX]);

  const renderSearch = () => {
    return (
      <Block width='100%' marginTop={20}>
        <TextInput style={styles.searchStyle} placeholder='Search here' placeholderTextColor={theme.colors.grey2} />
      </Block>
    )
  }


  return (
    <Container statusColor={theme.colors.grey16} edges={['right', 'left']} >
      <HeaderHome
        name={myInfo?.name}
        image={myInfo?.image}
        setIsCollapsible={setIsCollapsible}
        isCollapsible={isCollapsible}

      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{ position: 'relative', backgroundColor: theme.colors.grey14 }}>

        <Block >
          {renderSearch()}

          <HeaderListBook title={'Sách xem nhiều nhất'} />
          {/* {Backdrop()} */}
          {renderListMostRead()}
          {renderListCategory()}
          {renderListBookFree()}
          {renderListTopAuthor()}
          <Image source={images.banner} style={styles.banner} />
          {/* {renderListCategory()} */}
        </Block>
      </ScrollView>

    </Container>
  );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
  linearGradient: {
    height: 200,
    width: width,
    position: 'absolute',
    bottom: 40,
  },
  banner: {
    width: '100%',
    height: 130,
    marginTop: 30
  },
  searchStyle: {
    flex: 1,
    marginHorizontal: normalize(10)('moderate'),
    backgroundColor: colors.white,
    borderRadius: normalize(15)('moderate'),
    color: colors.grey2,
    fontSize: 14,
    paddingLeft: 15,

    shadowColor: colors.grey4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 4.65,

    elevation: 8,
  },

}));

export default withNamespaces()(HomeScreenMyAp);
