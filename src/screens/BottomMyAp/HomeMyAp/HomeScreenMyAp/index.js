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

// const listMostReadBook = {
//   data: [
//     {
//       _id: '5f0b8f9b9b9b9b9b9b9b9b9',
//       banner:
//         'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
//       name: 'Rich Dad Poor Dad',
//       name_author: 'Robert T.Kiyosaki',
//     },
//     {
//       _id: '32',
//       banner:
//         'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
//       name: 'Rich Dad Poor Dad',
//       name_author: 'Robert T.Kiyosaki',
//     },
//     {
//       _id: '5f0b8f9b9b9b9b9b9b9b9b29',
//       banner:
//         'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
//       name: 'Rich Dad Poor Dad',
//       name_author: 'Robert T.Kiyosaki',
//     },
//     {
//       _id: '322',
//       banner:
//         'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
//       name: 'Rich Dad Poor Dad',
//       name_author: 'Robert T.Kiyosaki',
//     },
//   ],
// };
const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const HomeScreenMyAp = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();

  const listMostReadBook = useSelector(state => state.getAllBook);
  const myInfo = useSelector(state => state.login.data);
  console.log('=========> myInfo', myInfo);

  useEffect(() => {
    dispatch({type: actions.GET_ALL_BOOK});
  }, []);

  const _renderItemMostBookRead = ({item}) => {
    return <ItemMostBookRead item={item} />;
  };

  return (
    <Block flex backgroundColor={theme.colors.white}>
      {/* <Header
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderHome
          name={myInfo?.account?.name}
          image={myInfo?.account?.image}
        />
        <Block paddingHorizontal={20}>
          <HeaderListBook title={'Sách xem nhiều nhất'} />
          <Block height={280}>
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
                  <Text>Chưa có sự kiện</Text>
                </Block>
              }
            />
          </Block>
          <TabCategoryBook />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default HomeScreenMyAp;
