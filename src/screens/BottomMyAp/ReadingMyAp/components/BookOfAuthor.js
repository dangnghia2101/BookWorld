import { ScrollView } from 'react-native';
import React from 'react';
import { useAppSelector } from '@hooks';
import { NoData, Block, Text } from '@components';
import { useGetBookOfAuthorQuery } from '@redux/servicesNew';
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook';
import { withNamespaces } from 'react-i18next';
import EmptyIcon from '@assets/svgs/EmptyIcon';
import { useTheme } from 'themeNew';
const BookOfAuthor = ({ t }) => {
    // const favoriteBook = useAppSelector(state => state.root.favoriteBook);
    const myInfo = useAppSelector(state => state.root.auth);
    const { data } = useGetBookOfAuthorQuery(myInfo._id);
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);

    return data?.data?.length > 0 ? (
        <Block>
            {data?.data.map((item, index) => (
                <ItemCateBook key={index} item={item} />
            ))}
        </Block>
    ) : (
        <Block alignCenter justifyCenter marginVertical={20}>
            <EmptyIcon />
            <Text fontType="bold1" color={colors.textInBox}>
                Author not have book yet
            </Text>
        </Block>
    );
};

export default withNamespaces()(BookOfAuthor);
