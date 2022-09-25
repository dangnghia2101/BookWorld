import { StyleSheet, Text, View } from 'react-native';
import { Block } from '@components';
import React from 'react';
import { useSelector } from 'react-redux';
import NoData from '@components';
import ItemAuthor from '@screens/BottomMyAp/ReadingMyAp/components/ItemAuthor';

const TapScenceAuthor = ({ route }) => {
  const listAuthor = useSelector(state => state.getAllAuthor);

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
