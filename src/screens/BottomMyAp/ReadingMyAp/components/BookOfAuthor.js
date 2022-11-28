import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useAppSelector } from '@hooks'
import { NoData, Block } from '@components'
import { useGetBookOfAuthorQuery } from '@redux/servicesNew'
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook'
const BookOfauthor = () => {
    // const favoriteBook = useAppSelector(state => state.root.favoriteBook);
    const myInfo = useAppSelector(state => state.root.auth);
    const { data } = useGetBookOfAuthorQuery(myInfo._id);
    console.log("favoriteeeeeeeeeeee", data);

    return data?.length > 0 ? (
        <Block>
            {data.map((item, index) => (
                <ItemCateBook key={index} item={item} />
            ))}
        </Block>
    ) : (
        <NoData title={'Chưa có sách yêu thích'}></NoData>
    );
}

export default BookOfauthor