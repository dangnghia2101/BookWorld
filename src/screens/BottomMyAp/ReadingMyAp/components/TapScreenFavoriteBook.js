import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '@hooks'
import { NoData, Block } from '@components'
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook'

const TapScreenFavoriteBook = () => {
    const favoriteBook = useAppSelector(state => state.root.favoriteBook);
    console.log("favoriteeeeeeeeeeee", favoriteBook);
    return favoriteBook?.bookListFavorite?.length > 0 ? (
        <Block>
            {favoriteBook?.bookListFavorite?.map((item, index) => (
                <ItemCateBook key={index} item={item} />
            ))}
        </Block>
    ) : (
        <NoData title={'Chưa có sách yêu thích'}></NoData>
    );
}

export default TapScreenFavoriteBook