import React, {useState} from 'react';
import {Block, Text} from '@components';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../../../../common/Header/index';
import SellPremire from 'common/Sell/SellPremire';
import HeaderListBook from './components/HeaderListEvent';
import {FlatList} from 'react-native-gesture-handler';
import {width} from '@utils/responsive';
import ItemMostBookRead from './components/ItemMostBookRead';
import TabCategoryBook from './components/TabCategoryBook';
import {theme} from '@theme';

const listMostReadBook = {
  data: [
    {
      _id: '5f0b8f9b9b9b9b9b9b9b9b9',
      banner:
        'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
      name: 'Rich Dad Poor Dad',
      name_author: 'Robert T.Kiyosaki',
    },
    {
      _id: '32',
      banner:
        'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
      name: 'Rich Dad Poor Dad',
      name_author: 'Robert T.Kiyosaki',
    },
    {
      _id: '5f0b8f9b9b9b9b9b9b9b9b29',
      banner:
        'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
      name: 'Rich Dad Poor Dad',
      name_author: 'Robert T.Kiyosaki',
    },
    {
      _id: '322',
      banner:
        'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
      name: 'Rich Dad Poor Dad',
      name_author: 'Robert T.Kiyosaki',
    },
  ],
};
const widthItemEventIncoming = width - width / 3;
const WIDTH_ITEM_INVIEW = widthItemEventIncoming - 20;

const HomeScreenMyAp = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  const _renderItemMostBookRead = ({item}) => {
    return <ItemMostBookRead item={item} />;
  };

  return (
    <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
    
    </Block>
  );
};

export default HomeScreenMyAp;
