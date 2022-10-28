import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import IconView from '@components/Icon';

import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';
import {withNamespaces} from 'react-i18next';

const Header = props => {
  const navigation = useNavigation();
  const {t} = props;

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  return (
    <Block height={200}>
      {/* <Image
            style={styles.imageBackground}
            source={require('../../../../../assets/images/rank.png')}
          /> */}
      <Block row style={[styles.container]}>
        <View style={styles.titleContainer}>
          <Text size={22} color={themeNew.colors.textDark} fontType={'bold'}>
            {t('profile')}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.editContainer}
          onPress={() => navigation.navigate(routes.SCREEN_EDIT_SETTINGS)}>
          <IconView
            component={'Ionicons'}
            name={'settings-sharp'}
            size={25}
            color={themeNew.colors.textDark}
          />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default withNamespaces()(Header);

const useStyle = makeStyles()(({colors}) => ({
  container: {
    left: 20,
    top: 35,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF50',
    opacity: 1,
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
  },
  imageBackground: {
    position: 'absolute',
    width: 1000,
    height: 200,
  },
}));
