import React, {useEffect, useState} from 'react';
import {Block, Text} from '@components';
import {ScrollView, StyleSheet} from 'react-native';
import HeaderListBook from './components/HeaderListEvent';
import {FlatList} from 'react-native-gesture-handler';
import {width} from '@utils/responsive';
import ItemMostBookRead from './components/ItemMostBookRead';
import TabCategoryBook from './components/TabCategoryBook';
import {theme} from '@theme';
import HeaderHome from './components/HeaderHome';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';

const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const HomeScreenMyAp = () => {
  // const [clicked, setClicked] = useState(false);
  // const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();

  const listMostReadBook = useSelector(state => state.getAllBook);
  const listCategoryBook = useSelector(state => state.getAllCategory);

  const myInfo = useSelector(state => state.login.data);

  useEffect(() => {
    dispatch({type: actions.GET_ALL_BOOK});
    dispatch({type: actions.GET_ALL_AUTHOR});
    dispatch({type: actions.GET_ALL_CATEGORY});
  }, []);

  const _renderItemMostBookRead = ({item}) => {
    return <ItemMostBookRead item={item} />;
  };

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderHome
          name={myInfo?.account?.name}
          image={myInfo?.account?.image}
        />
        <Block paddingHorizontal={20} marginTop={15}>
          <HeaderListBook title={'Sách xem nhiều nhất'} />
          <Block height={290} marginTop={15} marginBottom={10}>
            <FlatList
              data={listMostReadBook?.data}
              keyExtractor={item => item._id}
              renderItem={_renderItemMostBookRead}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
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
          <Block height={650}>
            {listCategoryBook?.data?.length > 0 ? (
              <TabCategoryBook />
            ) : (
              <Text>Loading</Text>
            )}
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default HomeScreenMyAp;
