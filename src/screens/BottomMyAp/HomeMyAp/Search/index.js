import { Block, HeaderWithButton, TextInput } from '@components';
import IconView from '@components/Icon';
import { useAppSelector } from '@hooks';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeStyles, useTheme } from 'themeNew';
import TabTopicSearch from './components/TabTopicSearch';
import { withNamespaces } from 'react-i18next';
const Search = ({ t }) => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);
    const inset = useSafeAreaInsets();
    const [search, setSearch] = useState('');
    const [focus, setFocus] = useState(false);
    const styles = useStyle(themeStore);

    const renderIconLeft = () => (
        <Block marginRight={5}>
            <IconView
                component="Ionicons"
                name="ios-search-outline"
                color={colors.grey10}
                size={22}
            />
        </Block>
    );

    return (
        <Block backgroundColor={colors.background} flex>
            <HeaderWithButton title="Explore" isBackHeader />
            <TextInput
                placeholder={t('searchHere')}
                onSubmitEditing={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                iconLeft={renderIconLeft}
                containerStyle={styles.containerSearch}
                style={focus ? styles.styleSearchFocus : styles.styleSearch}
                value={search}
                onChangeText={setSearch}
            />
            <TabTopicSearch search={search} setSearch={setSearch} />
        </Block>
    );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
    containerSearch: {
        marginHorizontal: 20,
    },
    styleSearch: {
        backgroundColor: colors.grey13,
        borderColor: colors.grey13,
        height: normalize(50)('moderate'),
    },
    styleSearchFocus: {
        borderColor: colors.primary,
        borderWidth: 2,
        height: normalize(50)('moderate'),
    },
}));

export default withNamespaces()(Search);
