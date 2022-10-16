import React, {useCallback} from 'react';
import {Block} from '@components';
import {ScrollView} from 'react-native';
import Header from './components/Header';
import ChartMoreMy from './components/ChartMoreMy';
import BodyEditMoreMy from '../EditMoreMyApp/components/BodyEditMoreMy';
import ItemMoreMy from './components/ItemMoreMy';
import ItemLastMoreMy from './components/ItemLastMoreMy';
import { FlatList } from 'react-native-gesture-handler';

import {useAppSelector} from 'hooks';
import {makeStyles, useTheme} from 'themeNew';

const MoreMyApp = props => {
  const myInfo = useAppSelector(state => state.root.auth);
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);

  const _renderItemRank = useCallback(
    ({ item, index }) => {
      return (
        <ItemLastMoreMy
          item={item}
          index={index}
          size={data}
        />
      );
    },
    [data],
  );

  return (
    <Block flex justifyCenter backgroundColor={themeNew.colors.text}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <BodyEditMoreMy
          name={myInfo?.name}
          image={myInfo?.image}
          email={myInfo?.email}
        />
        <ItemMoreMy />
        <ChartMoreMy />
        <ItemLastMoreMy/>
        {/* <FlatList
                data={data} renderItem={_renderItemRank}
              /> */}
     
      </ScrollView>
    </Block>
  );
};

export default MoreMyApp;

var data = [
  [{
    "id": 1,
    "last_name": "Poundford",
    "sumTime": 471,
    "sumBook": 8,
    "rank": 1
  }, {
    "id": 2,
    "last_name": "Kingscote",
    "sumTime": 233,
    "sumBook": 5,
    "rank": 2
  }, {
    "id": 3,
    "last_name": "Chelsom",
    "sumTime": 221,
    "sumBook": 4,
    "rank": 3
  }, {
    "id": 4,
    "last_name": "Klima",
    "sumTime": 240,
    "sumBook": 4,
    "rank": 4
  }, {
    "id": 5,
    "last_name": "Henniger",
    "sumTime": 122,
    "sumBook": 2,
    "rank": 5
  }]  
]
