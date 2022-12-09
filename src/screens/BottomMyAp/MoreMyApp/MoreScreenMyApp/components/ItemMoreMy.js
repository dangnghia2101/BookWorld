import { Block, Text } from '@components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '@hooks';

const ItemMoreMy = ({ props, t }) => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const styles = useStyle(props, themeStore);
    return (
        <Block
            marginTop={10}
            marginHorizontal={20}
            flex
            row
            justifyContent={'space-around'}>
            <Block
                marginRight={20}
                style={[styles.dataContainer, styles.shadowColor]}>
                <Text fontType={'medium1'} center color={themeNew.colors.textDark}>
                    {t('totalReadingTime')}
                </Text>
                <Text size={40} center color={themeNew.colors.textDark}>
                    1280
                </Text>
                <Text fontType={'medium1'} center color={themeNew.colors.textDark}>
                    {t('minute')}
                </Text>
            </Block>
            <Block style={[styles.dataContainer, styles.shadowColor]}>
                <Text fontType={'medium1'} center color={themeNew.colors.textDark}>
                    {t('numberOfBooksRead')}

                </Text>
                <Text size={40} center color={themeNew.colors.textDark}>
                    23
                </Text>
                <Text fontType={'medium1'} center color={themeNew.colors.textDark}>
                    {t('book')}
                </Text>
            </Block>
        </Block>
    );
};

export default withNamespaces()(ItemMoreMy);

const useStyle = makeStyles()(({ colors }) => ({
    dataContainer: {
        backgroundColor: colors.backgroundDark2,
        borderRadius: 20,
        height: 150,
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1,
    },
    shadowColor: {
        shadowColor: colors.grey12,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 2,
    },
}));
