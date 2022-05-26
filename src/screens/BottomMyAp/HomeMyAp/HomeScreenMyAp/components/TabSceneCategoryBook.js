import {Block, Text} from '@components';
import React from 'react';
import ItemCateBook from './ItemCateBook';

const TabSceneCategoryBook = ({route}) => {
  return route?.bookList?.length > 0 ? (
    <Block>
      {route?.bookList.map((item, index) => (
        <ItemCateBook key={index} item={item} />
      ))}
    </Block>
  ) : (
    <Text> Khong co sach </Text>
  );
};

export default TabSceneCategoryBook;
