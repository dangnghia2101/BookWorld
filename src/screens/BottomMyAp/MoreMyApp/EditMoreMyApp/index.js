import React from 'react';
import { Block, Container, HeaderWithButton } from '@components';
import HeaderEditMoreMy from './components/HeaderEditMoreMy';
import { ScrollView } from 'react-native';
import ItemEditLastMoreMy from './components/ItemEditLastMoreMy';
import ItemEditMoreMy from './components/ItemEditMoreMy';
import BodyEditMoreMy from './components/BodyEditMoreMy';
import { useAppSelector } from 'hooks';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';

const EditMoreMyApp = props => {
    const { t } = props;
    const myInfo = useAppSelector(state => state.root.auth);
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);

    return (
        <Block backgroundColor={themeNew.colors.background} flex>
            <HeaderWithButton title={t('profile')} isBackHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BodyEditMoreMy
                    name={myInfo?.name}
                    image={myInfo?.image}
                    email={myInfo?.email}
                />
                <ItemEditMoreMy />
                <ItemEditLastMoreMy />
            </ScrollView>
        </Block>
    );
};

export default withNamespaces()(EditMoreMyApp);
