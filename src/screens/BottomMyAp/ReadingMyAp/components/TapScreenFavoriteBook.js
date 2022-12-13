import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useAppSelector } from '@hooks'
import { NoData, Block } from '@components'
import { useGetFavoriteBookQuery } from '@redux/servicesNew'
import ItemFavoriteBook from './ItemFavoriteBook'
import { withNamespaces } from 'react-i18next'
const TapScreenFavoriteBook = ({ route, t }) => {
    // const favoriteBook = useAppSelector(state => state.root.favoriteBook);
    const myInfo = useAppSelector(state => state.root.auth);
    const { data } = useGetFavoriteBookQuery(myInfo._id);
    console.log("favoriteeeeeeeeeeee", data?.data[0]?.favoriteBooks);

    return data ? (
        <ScrollView>
            {data?.data[0]?.favoriteBooks?.map((item, index) => (
                <ItemFavoriteBook key={index} item={item} />
            ))}
        </ScrollView>
    ) : (
        <NoData title={t('noBook')}></NoData>
    );
}

export default withNamespaces()(TapScreenFavoriteBook)