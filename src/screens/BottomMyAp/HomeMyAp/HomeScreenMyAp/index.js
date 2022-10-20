import { images } from '@assets';
import { Block, Container, Text } from '@components';
import { useGetAllBookQuery, useGetAllCategoryQuery } from '@redux/servicesNew';
import { height, width } from '@utils/responsive';
import { useAppSelector } from 'hooks';
import React, { useCallback, useState } from 'react';
import { withNamespaces } from 'react-i18next';
import {
  Animated,
  Image,
  LogBox,
  Platform,
  ScrollView,
  View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeStyles, useTheme } from 'themeNew';
import HeaderHome from './components/HeaderHome';
import HeaderListBook from './components/HeaderListEvent';
import ItemMostBookRead from './components/ItemMostBookRead';
import TabCategoryBook from './components/TabCategoryBook';

LogBox.ignoreAllLogs();
const ITEM_WITH = width * 0.6;

const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;
const BACKDROP_HEIGHT = height * 0.65;

const author = [
  { _id: 1, image: images.backdrop_1 },
  { _id: 2, image: images.backdrop_2 },
  {
    _id: 3,
    image: images.backdrop_3,
  },
  {
    _id: 4,
    image: images.backdrop_4,
  },
  { _id: 5, image: images.backdrop_6 },
  { _id: 6, image: images.backdrop_7 },
  { _id: 7, image: images.backdrop_8 },
];

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
      <Block height={height * 0.65}>
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
      <Block height={650} borderTopWidth={2} borderColor={theme.colors.textInBox}>
        {allCategories?.length > 0 ? (
          <TabCategoryBook />
        ) : (
          <Text>Loading</Text>
        )}
      </Block>
    );
  }, [allCategories]);

  const Backdrop = () => {
    return (
      <View
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
        }}>
        <FlatList
          data={author}
          keyExtractor={(item, index) => item._id + '-backdrop'}
          removeClippedSubviews={false}
          contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
          scrollEnabled={true}
          renderItem={({ item, index }) => {
            // console.log("+====", item);
            // if (!item.backdrop) {
            //   return null;
            // }
            const translateX = scrollX.interpolate({
              inputRange: [
                (index - 2) * ITEM_WITH,
                (index - 1) * ITEM_WITH,
              ],
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
                  source={item.image}
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
          key={() => Math.random()}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', theme.colors.text]}
          style={styles.linearGradient}
        />
      </View>
    );
  };

  return (
    <Container statusColor={theme.colors.text} edges={['right', 'left']} >
      <HeaderHome
        name={myInfo?.name}
        image={myInfo?.image}
        setIsCollapsible={setIsCollapsible}
        isCollapsible={isCollapsible}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{ position: 'relative', backgroundColor: theme.colors.text }}>

        <Block >

          <HeaderListBook title={'Sách xem nhiều nhất'} />
          {Backdrop()}
          {renderListMostRead()}
          {renderListCategory()}
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
