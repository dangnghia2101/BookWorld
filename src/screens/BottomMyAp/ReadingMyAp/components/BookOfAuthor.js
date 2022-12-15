import { ScrollView } from 'react-native'
import React from 'react'
import { useAppSelector } from '@hooks'
import { NoData, Block, Text } from '@components'
import { useGetBookOfAuthorQuery } from '@redux/servicesNew'
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook'
import { withNamespaces } from 'react-i18next'
const BookOfAuthor = ({ t }) => {
    // const favoriteBook = useAppSelector(state => state.root.favoriteBook);
    const myInfo = useAppSelector(state => state.root.auth);
    const { data } = useGetBookOfAuthorQuery(myInfo._id);
    console.log("BookOFAUTHORrrrrrrrrrr", data);

    return data?.data?.length > 0 ? (
        <Block>
            {data?.data.map((item, index) => (
                <ItemCateBook key={index} item={item} />
            ))}
        </Block>
    ) : (
        <Text title={t('noBook')}></Text>
    );
}

export default withNamespaces()(BookOfAuthor);