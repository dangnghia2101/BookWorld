import { StyleSheet, Text, View } from 'react-native';
import { Block } from '@components';
import React from 'react';
import ItemAuthor from './ItemAuthor';

const TapScenceAuthor = ({ route }) => {
  return route?.bookList?.length > 0 ? (
    <Block>
      {route?.bookList.map((item, index) => (
        <ItemAuthor key={index} item={item} />
      ))}
    </Block>
  ) : (
    <Text>Chua co du lieu</Text>
  );
};

export default TapScenceAuthor;

const styles = StyleSheet.create({});
