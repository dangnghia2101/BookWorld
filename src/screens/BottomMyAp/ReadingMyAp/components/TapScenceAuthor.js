import React from 'react';
import { ScrollView } from 'react-native';
import ItemAuthor from './ItemAuthor';
import { Block, NoData } from '@components';
import { useGetAllAuthorQuery } from '@redux/servicesNew';
import { useAppSelector } from '@hooks';
const TapScenceAuthor = ({ route }) => {

  // const { data: getAllAuthor } = useGetAllAuthorQuery();
  const authors = useAppSelector(state => state.root.author.authors);
  return authors?.length > 0 ? (
    <ScrollView>
      {authors?.map((item, index) => (
        <ItemAuthor key={index} item={item} />
      ))}
    </ScrollView>
  ) : (
    <NoData title={'Chưa có tác giả'}></NoData>
  );

};

export default TapScenceAuthor;

