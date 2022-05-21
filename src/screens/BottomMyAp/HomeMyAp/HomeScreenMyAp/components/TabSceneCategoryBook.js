import {StyleSheet, FlatList} from 'react-native';
import {Block, Text} from '@components';
import React from 'react';
import {event} from 'react-native-reanimated';
import ItemCateBook from './ItemCateBook';

const TabSceneCategoryBook = ({route}) => {
  const _renderItem = ({item}) => {
    return <ItemCateBook item={item} />;
  };
  
  return route?.bookList?.length > 0 ? (
    <Block>
      <FlatList
        data={route?.bookList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  ) : (
    <Text> Khong co sach </Text>
  );
};

export default TabSceneCategoryBook;

const styles = StyleSheet.create({});
