import { StyleSheet, Text, View } from 'react-native';
import { Block } from '@components';
import React from 'react';
import ItemAuthor from './ItemAuthor';
// import { useAp } from 'react-redux';
import { useAppSelector } from '@hooks';
import NoData from '@components';
const TapScenceAuthor = ({ route }) => {
  const listAuthor = useAppSelector(state => state.getAllAuthor);
  return listAuthor?.data?.length > 0 ? (
    <Block>
      {listAuthor?.data.map((item, index) => (
        <ItemAuthor key={index} item={item} />
      ))}
    </Block>
  ) : (
    <NoData title={'Chưa có tác giả'}></NoData>
  );
};

export default TapScenceAuthor;

const styles = StyleSheet.create({});
