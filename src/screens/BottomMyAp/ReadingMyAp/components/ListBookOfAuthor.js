import { StyleSheet, Text } from 'react-native';
import { Block } from '@components';
import NoData from '@components';
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook';
import { useSelector } from 'react-redux';
import React from 'react';

const ListBookOfAuthor = ({ route }) => {
    const listBookOfAuthor = useSelector(state => state.getAllBookAuthor);
    console.log('++++++++++>>>', listBookOfAuthor);
    return listBookOfAuthor?.data?.length > 0 &&
        route._id === listBookOfAuthor?.data[0].categoryId ? (
        <Block>
            {listBookOfAuthor?.data.map((item, index) => (
                <ItemCateBook key={index} item={item} />
            ))}
        </Block>
    ) : (
        <NoData title={'không có sách'} />
    );
};

export default ListBookOfAuthor;

const styles = StyleSheet.create({});
