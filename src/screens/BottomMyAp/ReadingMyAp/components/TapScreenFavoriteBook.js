import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '@hooks'
import { NoData, Block } from '@components'
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook'
import { useGetFavoriteBookQuery } from '@redux/servicesNew'
const TapScreenFavoriteBook = () => {
    // const favoriteBook = useAppSelector(state => state.root.favoriteBook);
    const myInfo = useAppSelector(state => state.root.auth);
    const { data } = useGetFavoriteBookQuery(myInfo._id);
    console.log("favoriteeeeeeeeeeee", data?.data[0]?.favoriteBooks);

    return data ? (
        <Block>
            {data?.data[0]?.favoriteBooks?.map((item, index) => (
                <ItemCateBook key={index} item={item.idBook} />
            ))}
        </Block>
    ) : (
        <NoData title={'Chưa có sách yêu thích'}></NoData>
    );
}

export default TapScreenFavoriteBook