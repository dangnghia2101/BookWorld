import { Block, Container, Text } from '@components';
import { useGetAllBookQuery, useGetAllCategoryQuery } from '@redux/servicesNew';
import { height, width } from '@utils/responsive';
import { useAppSelector } from 'hooks';
import React, { useCallback, useState } from 'react';
import { withNamespaces } from 'react-i18next';
import {
  Animated, LogBox,
  Platform,
  ScrollView
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeStyles, useTheme } from 'themeNew';
import HeaderHome from './components/HeaderHome';
import HeaderListBook from './components/HeaderListEvent';
import ItemCategory from './components/ItemCategory';
import ItemMostBookRead from './components/ItemMostBookRead';

LogBox.ignoreAllLogs();
const ITEM_WITH = width * 0.6;

const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const HomeScreenMyAp = () => {
  // const [clicked, setClicked] = useState(false);
  // const [searchPhrase, setSearchPhrase] = useState('');

  useGetAllBookQuery();
  useGetAllCategoryQuery();
  const insets = useSafeAreaInsets();


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

  // const renderListCategory = useCallback(() => {
  //   return (
  //     <Block height={650} borderTopWidth={2} borderColor={theme.colors.textInBox}>
  //       {allCategories?.length > 0 ? (
  //         <TabCategoryBook />
  //       ) : (
  //         <Text>Loading</Text>
  //       )}
  //     </Block>
  //   );
  // }, [allCategories]);



  const renderListCategory = useCallback(() => {
    return (
      <Block >
        <HeaderListBook title={'Thể loại sách'} />

        <Animated.FlatList
          data={allCategories}
          keyExtractor={item => Math.random() + item._id}
          renderItem={(item) => <ItemCategory item={item} />}
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

          <HeaderListBook title={'Sách xem nhiều nhất'} />
          {/* {Backdrop()} */}
          {renderListMostRead()}
          {renderListCategory()}
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
}));

export default withNamespaces()(HomeScreenMyAp);
