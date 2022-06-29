import {Block, Text, Button} from '@components';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '@components/Icon';
import {routes} from '@navigation/routes';

import {theme} from '@theme';
const {width, height} = Dimensions.get('window');

const {colors} = theme;
const PADDING_ITEM = 15;

const ItemCateBook = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.DETAIL_BOOK_MY_AP, {bookmark: true, item})
      }>
      <Block width={width} marginRight={PADDING_ITEM} row marginTop={20}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Block marginHorizontal={10}>
          <Text size={18} fontType="bold">
            {item.name}
          </Text>
          <Text size={14} color={colors.dark}>
            {item.name_author}
          </Text>

          <Block row marginTop={5} alignCenter>
            <Icon
              component={'Foundation'}
              name="page-multiple"
              color={colors.lightGray}
              size={16}
            />
            <Text marginLeft={5} marginRight={20} size={14} color={colors.dark}>
              234
            </Text>

            <Icon
              component={'Entypo'}
              name="eye"
              color={colors.lightGray}
              size={16}
            />
            <Text marginLeft={5} marginRight={20} size={14} color={colors.dark}>
              999k
            </Text>
          </Block>

          <Block row marginTop={5} alignCenter>
            <Icon
              component={'AntDesign'}
              name="star"
              color={colors.yellow}
              size={16}
            />
            <Icon
              component={'AntDesign'}
              name="star"
              color={colors.yellow}
              size={16}
            />

            <Icon
              component={'AntDesign'}
              name="star"
              color={colors.yellow}
              size={16}
            />
            <Icon
              component={'AntDesign'}
              name="star"
              color={colors.yellow}
              size={16}
            />
            <Text marginLeft={5}>4.0</Text>
          </Block>

          <Block row marginTop={10} alignCenter>
            <Button
              style={[
                styles.btnItemCate,
                {backgroundColor: theme.colors.lightRed},
              ]}
              onPress={() =>
                navigation.navigate(routes.DETAIL_BOOK_MY_AP, {item})
              }>
              <Text size={12} fontType="bold" color="white">
                Đọc sách
              </Text>
            </Button>
            <Button
              style={[
                styles.btnItemCate,
                {backgroundColor: theme.colors.black, marginLeft: 10},
              ]}>
              <Text size={12} fontType="bold" color="white">
                Sách nói
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ItemCateBook;

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
    height: 170,
    width: width / 3.5,
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
  btnItemCate: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
