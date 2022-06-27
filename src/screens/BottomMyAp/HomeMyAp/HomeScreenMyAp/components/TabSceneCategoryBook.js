import {Block, Text} from '@components';
import React from 'react';
import ItemCateBook from './ItemCateBook';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';

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
