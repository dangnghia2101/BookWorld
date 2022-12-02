import { Text } from '@components';
import { useAppSelector } from '@hooks';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Image, TouchableOpacity } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';

const ItemAuthor = ({ item, t }) => {
    const navigation = useNavigation();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const theme = useTheme(themeStore);
    const styles = useStyles(themeStore);

    return (
        <TouchableOpacity
            style={{
                marginHorizontal: 10,
                marginTop: 10,
                alignItems: 'center',
            }}>
            <Image
                source={{
                    uri: item.avatar || '',
                }}
                style={styles.image}
            />
            <Text color={theme.colors.textInBox} size={12} marginTop={5}>
                {item?.name.slice(0, 12)}
            </Text>
        </TouchableOpacity>
    );
};

export default withNamespaces()(ItemAuthor);

const useStyles = makeStyles()(({ colors }) => ({
    image: {
        height: 55,
        width: 55,
        borderRadius: 100,
    },
}));
