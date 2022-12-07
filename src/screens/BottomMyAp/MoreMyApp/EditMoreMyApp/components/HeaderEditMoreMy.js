import { Block, Text } from '@components';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import IconView from '@components/Icon';

import { makeStyles, useTheme } from 'themeNew';
import { useAppSelector, useAppDispatch } from '@hooks';
import { withNamespaces } from 'react-i18next';

const HeaderEditMoreMy = props => {
    const navigation = useNavigation();
    const { t } = props;

    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const styles = useStyle(props, themeStore);

    return (
        <Block height={200}>
            {/* <Image
            style={styles.imageBackground}
            source={require('../../../../../assets/images/rank.png')}
          /> */}
            <Block row style={styles.container}>
                <TouchableOpacity
                    style={styles.editContainer}
                    onPress={() => navigation.navigate(routes.SCREEN_SETTINGS)}>
                    <IconView
                        component={'Ionicons'}
                        name={'arrow-back'}
                        size={25}
                        color={themeNew.colors.textDark}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text
                        size={22}
                        fontType={'bold'}
                        color={themeNew.colors.textDark}>
                        {t('profile')}
                    </Text>
                </View>
            </Block>
        </Block>
    );
};

export default withNamespaces()(HeaderEditMoreMy);

const useStyle = makeStyles()(({ colors }) => ({
    container: {
        paddingLeft: 20,
        paddingTop: 35,
        position: 'absolute',
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 35,
    },
    imageBackground: {
        position: 'absolute',
        width: 1000,
        height: 200,
    },
}));
