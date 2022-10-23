import { Block, Text } from '@components';
import { useAppSelector } from '@hooks';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { randomColor } from '@utils/helper';
import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Image, TouchableOpacity } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';

const ItemCategory = ({ item }) => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const { colors } = useTheme(themeStore);
  const styles = useStyle(themeStore);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate(routes.BOOKS_BY_CATEGORY, {
          id: item.item._id,
          title: item.item.name,
        })
      }>
      <Block alignCenter justifyCenter style={styles.shadow} backgroundColor={randomColor(8)}>
        <Image style={styles.image} source={{ uri: 'https://i.ibb.co/6y5fSzP/lover.png' }} />
        <Text size={12} marginHorizontal={5} marginTop={5} numberOfLines={2} flexGrow>{item?.item?.name}</Text>
      </Block>
    </TouchableOpacity>
  );
};

const useStyle = makeStyles()(({ colors, normalize }) => ({
  container: {
    marginTop: 20,
    marginBottom: 50,
  },
  shadow: {
    width: normalize(85)('moderate'),
    height: normalize(85)('moderate'),

    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: colors.grey4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 4,
  },
  image: {
    height: normalize(40)('moderate'),
    width: normalize(40)('moderate'),
    marginTop: 5
  }
}));

export default withNamespaces()(ItemCategory);
