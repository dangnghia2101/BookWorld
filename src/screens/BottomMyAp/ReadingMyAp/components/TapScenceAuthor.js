import React from 'react';
import ItemAuthor from './ItemAuthor';
import { Block, NoData } from '@components';
import { useGetAllAuthorQuery } from '@redux/servicesNew';

const TapScenceAuthor = ({ route }) => {

  const { data: getAllAuthor } = useGetAllAuthorQuery();
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

