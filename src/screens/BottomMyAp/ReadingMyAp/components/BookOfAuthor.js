import EmptyIcon from '@assets/svgs/EmptyIcon';
import { Block, Text } from '@components';
import { useAppSelector } from '@hooks';
import { useLazyGetBookOfAuthorQuery } from '@redux/servicesNew';
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook';
import React, { useEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import { useTheme } from 'themeNew';
const BookOfAuthor = ({ t, idAuthor }) => {
    const [getBookOfAuthor, { data }] = useLazyGetBookOfAuthorQuery();

    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);

    useEffect(() => {
        getBookOfAuthor(idAuthor);
    }, []);

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
