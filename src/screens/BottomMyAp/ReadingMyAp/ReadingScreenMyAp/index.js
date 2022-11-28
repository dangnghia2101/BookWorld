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

const ReadingScreenMyAp = () => {
  const navigation = useNavigation();
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);
  const styles = useStyle(themeStore);
  return (
    <Block flex paddingHorizontal={10} backgroundColor={theme.colors.grey16}>
      <Block width={'100%'} height={'10%'} marginVertical={10}>
        <Pressable
          onPress={() => navigation.navigate(routes.SEARCH)}
          style={styles.searchStyle}>
          <Text color={theme.colors.grey4} size={14}>
            Search here
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
