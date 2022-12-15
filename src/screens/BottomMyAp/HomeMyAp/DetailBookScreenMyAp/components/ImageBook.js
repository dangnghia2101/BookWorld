import { Block, Text } from '@components';
import Icon from '@components/Icon';
import { useAppSelector } from '@hooks';
import { theme } from '@theme';
import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { useTheme } from 'themeNew';
const widthPhone = Dimensions.get('window').width;

const _renderStar = num => {
  let star = [];
  for (let i = 0; i < num; i++) {
    star.push(
      <Icon
        component={'AntDesign'}
        name="star"
        color={theme.colors.yellow}
        size={20}
      />,
    );
  }
  return star;
};

const ImageBook = ({ item }) => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  return (
    <Block alignCenter>
      <Image source={{ uri: item.item.image }} style={styles.image} />
      <Text
        fontType="bold1"
        size={20}
        marginTop={10}
        color={themeNew.colors.textInBox}>
        {item.item.name}
      </Text>
      <Text fontType="regular1" size={16} color={themeNew.colors.textInBox}>
        {item.item.name}
      </Text>
      {/* Star */}
      <Block row marginTop={5}>
        {_renderStar(5)}
        <Text marginLeft={5}>4.0</Text>
      </Block>
    </Block>
  );
};

export default ImageBook;

const styles = StyleSheet.create({
  image: {
    height: 330,
    width: widthPhone - 150,
    resizeMode: 'center',
    borderRadius: 20,
  },
});
