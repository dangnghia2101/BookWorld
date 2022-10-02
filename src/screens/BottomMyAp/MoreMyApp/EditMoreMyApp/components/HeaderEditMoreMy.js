import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import IconView from '@components/Icon';

import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';
import {withNamespaces} from 'react-i18next';

const HeaderEditMoreMy = props => {
  const navigation = useNavigation();
  const {t} = props;

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  return (
    <Block height={200} backgroundColor={themeNew.colors.primary}>
      <Block row style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.SCREEN_SETTINGS)}>
          <IconView
            component={'Ionicons'}
            name={'arrow-back'}
            size={30}
            color={themeNew.colors.white}
          />
        </TouchableOpacity>
        <Text
          size={24}
          fontType={'bold'}
          color={themeNew.colors.white}
          marginLeft={80}>
          {t('profile')}
        </Text>
      </Block>
    </Block>
  );
};

export default withNamespaces()(HeaderEditMoreMy);

const useStyle = makeStyles()(({colors}) => ({
  container: {
    left: 20,
    top: 35,
  },
  titleSection: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    left: 80,
  },
}));
