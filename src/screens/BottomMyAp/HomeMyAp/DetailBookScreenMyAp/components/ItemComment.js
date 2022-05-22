import {Block, Text, Button} from '@components';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@components/Icon';

import {theme} from '@theme';
import {images} from '@assets';
import {startCase} from 'lodash';

const {colors} = theme;
const PADDING_ITEM = 15;

const _renderStar = num => {
  let star = [];
  for (let i = 0; i < num; i++) {
    star.push(
      <Icon
        component={'AntDesign'}
        name="star"
        color={theme.colors.yellow}
        size={16}
      />,
    );
  }
  return star;
};

const ItemComment = ({item}) => {
  return (
    <Block>
      <Block marginRight={PADDING_ITEM} row marginTop={20}>
        <Image
          style={styles.image}
          source={{
            uri: item.Image,
          }}
        />
        <Block marginHorizontal={10}>
          <Text size={15} fontType="regular">
            {item.UserName}
          </Text>
          <Block row marginTop={5}>
            {_renderStar(item.Evaluate)}
          </Block>
        </Block>
      </Block>
      <Block marginTop={5} marginLeft={5}>
        <Text color={colors.gray}>{item.Content}</Text>
      </Block>
    </Block>
  );
};

export default ItemComment;

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
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'center',
    backgroundColor: colors.gray2,
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
  btnItemCate: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
