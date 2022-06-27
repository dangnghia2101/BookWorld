import {Block, Text} from '@components';
import React from 'react';
import ItemCateBook from './ItemCateBook';
import {useSelector} from 'react-redux';
import {NoData} from '@components';

const TabSceneCategoryBook = ({route}) => {
  const listBookByCategory = useSelector(state => state.getAllBookByCategory);

  return listBookByCategory?.data?.length > 0 &&
    route._id === listBookByCategory?.data[0]?.categoryId ? (
    <Block>
      {listBookByCategory?.data.map((item, index) => (
        <ItemCateBook key={index} item={item} />
      ))}
    </Block>
  ) : (
    <NoData title={'Không có sách'} />
  );
};

export default TabSceneCategoryBook;
