import React from 'react';
import {Block, HeaderWithButton} from '@components';
import HeaderEditMoreMy from './components/HeaderEditMoreMy';
import {ScrollView} from 'react-native';
import ItemEditLastMoreMy from './components/ItemEditLastMoreMy';
import ItemEditMoreMy from './components/ItemEditMoreMy';
import BodyEditMoreMy from './components/BodyEditMoreMy';

import {useAppSelector} from 'hooks';
import {makeStyles, useTheme} from 'themeNew';
import {withNamespaces} from 'react-i18next';

const MoreMyApp = props=> {
  const {t} = props;
  const myInfo = useAppSelector(state => state.root.auth);
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);

  return (
    <Block flex justifyCenter backgroundColor={themeNew.colors.text}>
        <HeaderWithButton isBackHeader title={t('profile')}/>
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

export default withNamespaces()(MoreMyApp);

