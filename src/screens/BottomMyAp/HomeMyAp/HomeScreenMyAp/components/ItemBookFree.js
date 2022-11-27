import { useAppSelector } from '@hooks';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Image, TouchableOpacity } from 'react-native';
import { makeStyles } from 'themeNew';

const ItemBookFree = ({ item, t }) => {
    const navigation = useNavigation();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);

    const styles = useStyles(themeStore);

    return (
        <TouchableOpacity
            style={{ marginHorizontal: 20, marginTop: 10 }}
            onPress={() =>
                navigation.navigate(routes.DETAIL_BOOK_MY_AP, {
                    bookmark: true,
                    item,
                })
            }>
            <Image
                source={{
                    uri: item.image || '',
                }}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

export default withNamespaces()(ItemBookFree);

const useStyles = makeStyles()(({ colors }) => ({
    image: {
        height: 120,
        width: 80,
        borderRadius: 10,
    },
}));
