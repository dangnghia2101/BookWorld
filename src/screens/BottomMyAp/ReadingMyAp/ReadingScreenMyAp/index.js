import React from 'react';
import { Pressable } from 'react-native';
import { Block, Text, Icon } from '@components';
import { theme } from '@theme';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from 'hooks';
import { routes } from '@navigation/routes';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';

import TapReadingStatus from '../components/TapReadingStatus';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ReadingScreenMyAp = ({ t }) => {
    const navigation = useNavigation();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const theme = useTheme(themeStore);
    const styles = useStyle(themeStore);
    const inset = useSafeAreaInsets();
    return (
        <Block
            marginTop={inset.top}
            flex
            paddingHorizontal={10}
            backgroundColor={theme.colors.background}>
            <Block width={'100%'} height={'10%'} marginVertical={10}>
                <Pressable
                    onPress={() => navigation.navigate(routes.SEARCH)}
                    style={styles.searchStyle}>
                    <Text fontType='regular1' color={theme.colors.grey4} size={14}>
                        {t('searchHere')}
                    </Text>
                    <Icon
                        component="Ionicons"
                        name="ios-search-outline"
                        size={22}
                        color={theme.colors.grey4}
                    />
                </Pressable>
            </Block>
            <TapReadingStatus />
        </Block>
    );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
    searchStyle: {
        marginHorizontal: normalize(10)('moderate'),
        paddingHorizontal: normalize(15)('moderate'),
        backgroundColor: colors.white,
        borderRadius: normalize(15)('moderate'),
        height: normalize(50)('moderate'),
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: colors.grey4,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.07,
        shadowRadius: 4.65,

        elevation: 8,
    },
}));

export default withNamespaces()(ReadingScreenMyAp);
