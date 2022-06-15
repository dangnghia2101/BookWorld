import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Block, Text } from '@components';
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook';

const TabSceneReadingStatus = ({ route }) => {
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

export default TabSceneReadingStatus;

const styles = StyleSheet.create({});
