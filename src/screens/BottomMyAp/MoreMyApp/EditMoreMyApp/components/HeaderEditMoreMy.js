import { Block, Text } from '@components';
import React from 'react';
import { theme } from '@theme';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import IconView from '@components/Icon';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';
import { useAppSelector } from 'hooks';

const { colors } = theme;
const HeaderEditMoreMy = props => {
  const navigation = useNavigation();
  const { t } = props;

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  return (
    <Block height={200} backgroundColor={themeNew.colors.primary}>
      <Block row style={styles.container}>
        <TouchableOpacity
          style={styles.editContainer}
          onPress={() => navigation.navigate(routes.SCREEN_SETTINGS)}>
          <IconView
            component={'Ionicons'}
            name={'arrow-back'}
            size={30}
            color={themeNew.colors.white}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text size={24} fontType={'bold'} color={themeNew.colors.white}>
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
}));
