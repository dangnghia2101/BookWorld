import {StyleSheet, Image, Dimensions} from 'react-native';
import {Block, Text} from '@components';
import React from 'react';
import {theme} from '@theme';
import Icon from '@components/Icon';
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

const ImageBook = ({item}) => {
  return (
    <Block alignCenter>
      <Image source={{uri: item.item.image}} style={styles.image} />
      <Text fontType="bold" size={20} marginTop={10}>
        {item.item.name}
      </Text>
      <Text fontType="regular" size={16} color={theme.colors.lightGray}>
        {item.item.name}
      </Text>
      {/* Star */}
      <Block row marginTop={5}>
        {_renderStar(4)}
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
