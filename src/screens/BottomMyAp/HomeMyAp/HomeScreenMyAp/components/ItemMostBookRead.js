import {Block, Text} from '@components';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {theme} from '@theme';
const {colors} = theme;
const PADDING_ITEM = 15;

const ItemMostBookRead = ({item}) => {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity
    // onPress={() => navigation.navigate(routes.EVENT_DETAIL, {event: item})}
    >
      <Block marginRight={PADDING_ITEM}>
        <Image
          style={styles.image}
          source={{
            uri: item.banner,
          }}
        />
        <Text marginTop={10} size={14} fontType="bold">
          {item.name}
        </Text>
        <Text size={11} color={colors.dark}>
          {item.name_author}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

export default ItemMostBookRead;

const styles = StyleSheet.create({
  inputSection: {
    color: colors.white,
    height: 40,
    marginHorizontal: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  inputText: {
    flex: 1,
    paddingRight: 10,
  },
  iconSearch: {
    paddingHorizontal: 10,
  },
  mainView: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  titleSection: {
    fontSize: 18,
    color: colors.blueTitle,
    fontWeight: 'bold',
  },
  titleViewAll: {
    color: colors.orange,
  },
  image: {
    height: 230,
    width: 150,
    borderRadius: 15,
    resizeMode: 'center',
  },
  title_InView: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blueTitle,
  },
  containerBtnDetail: {
    backgroundColor: colors.orange,
    height: 35,
  },
  btnDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEventHightLight: {
    height: 68,
    width: 68,
  },
  titleEventhighlight: {
    color: colors.blueTitle,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
