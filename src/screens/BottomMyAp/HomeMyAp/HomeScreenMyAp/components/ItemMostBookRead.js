import { Block, Text, Evaluate } from '@components';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@navigation/routes';
import { width, height } from '@utils/responsive';

import { theme } from '@theme';
const { colors } = theme;
const PADDING_ITEM = 15;
const ITEM_WITH = width * 0.6;
const SPACER_ITEM_SIZE = (width - ITEM_WITH) / 3;

const ItemMostBookRead = ({ item, index, scrollX, size }) => {
  const inputRange = [
    (index - 2) * ITEM_WITH,
    (index - 1) * ITEM_WITH,
    index * ITEM_WITH,
  ];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -50, 0],
    extrapolate: 'clamp',
  });

  const navigation = useNavigation();
  if (index === 0 || index === size - 1) {
    return <View style={{ width: SPACER_ITEM_SIZE + 20 }} />;
  }
  return (
    <TouchableOpacity
      style={{ width: ITEM_WITH, marginTop: 100 }}
      onPress={() =>
        navigation.navigate(routes.DETAIL_BOOK_MY_AP, {
          bookmark: true,
          item: item,
        })
      }>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignItems: 'center',
          transform: [{ translateY }],
          borderRadius: 34,
          backgroundColor: 'white',
          justifyContent: 'center',
          paddingVertical: 20,
          marginHorizontal: 10,
        }}>
        {/* <Block width={width / 2} marginRight={PADDING_ITEM}> */}
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Text
          marginHorizontal={10}
          numberOfLines={1}
          marginTop={10}
          size={14}
          fontType="bold">
          {item.name}
        </Text>
        <Text
          style={{ marginBottom: 10 }}
          numberOfLines={1}
          size={11}
          color={colors.dark}>
          {item.isPrice} lượt xem
        </Text>

        <Evaluate sizeIcon={15} colorIcon={colors.yellow} />
        {/* </Block> */}
      </Animated.View>
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
    height: height / 3,
    width: ITEM_WITH * 0.8,
    borderRadius: 15,
    resizeMode: 'cover',
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
