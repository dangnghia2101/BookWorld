import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '@theme';

import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import IconView from '@components/Icon';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';
import {withNamespaces} from 'react-i18next';

const {colors} = theme;

const HeaderChangeLanguage = props => {
  const {t} = props;
  const navigation = useNavigation();

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  return (
    <Block>
      <Block row style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.SCREEN_EDIT_SETTINGS)}>
          <IconView
            component={'Ionicons'}
            name={'arrow-back'}
            size={30}
            color={themeNew.colors.textDark}
          />
        </TouchableOpacity>
        <Text
          fontType="bold"
          size={22}
          marginLeft={80}
          color={themeNew.colors.textDark}>
          {t('language')}
        </Text>
      </Block>
    </Block>
  );
};

export default withNamespaces()(HeaderChangeLanguage);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 35,
  },
});
