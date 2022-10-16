import { StyleSheet, Text, View } from 'react-native';
import { Block, NoData } from '@components';
import React from 'react';
import ItemAuthor from './ItemAuthor';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@hooks';
import { useGetAllAuthorQuery } from '@redux/servicesNew/authorAPI';

const TapScenceAuthor = ({ route }) => {

  const { data: getAllAuthor } = useGetAllAuthorQuery();
  console.log("---------list author", getAllAuthor);
  return getAllAuthor?.length > 0 ? (
    <Block>
      {getAllAuthor?.map((item, index) => (
        <ItemAuthor key={index} item={item} />
      ))}
    </Block>
  ) : (
    <NoData title={'Chưa có tác giả'}></NoData>
  );

};

export default TapScenceAuthor;

const styles = StyleSheet.create({});
