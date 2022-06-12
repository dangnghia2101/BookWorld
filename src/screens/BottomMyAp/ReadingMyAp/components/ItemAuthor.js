import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Block } from '@components';
import { theme } from '@theme';
import Icon from '@components/Icon';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { routes } from '@navigation/routes';

const ItemAuthor = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.DETAIL_AUTHOR_MY_AP)}>
      <Block width="100%" height={200} alignCenter marginTop={20} relative>
        <Block
          width="100%"
          height={145}
          backgroundColor={theme.colors.darkGray}
          radius={20}
          absolute
          row
          top={50}>
          <Block width="50%" height="100%">
            <Text style={styles.textName}>Tên tác giả</Text>
            <Text style={styles.nameAuthor}>{item.name}</Text>
            <Text style={styles.textRate}>Tên tác giả</Text>
            <Block row marginLeft={22} marginTop={5}>
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Text style={styles.totalRate}>4.0</Text>
            </Block>
          </Block>

          <Block width="50%" height="100%" alignCenter>
            <Text numberOfLines={2} style={styles.textQuantity}>
              Số lượng sách xuất bản
            </Text>
            <Text style={styles.totalRead}>23</Text>
            <Text style={styles.textName}>Tổng lượt đọc</Text>
            <Text style={styles.totalRead}>23</Text>
          </Block>
        </Block>
        <Block
          backgroundColor={theme.colors.white}
          width={100}
          height={100}
          radius={50}
          justifyCenter
          alignCenter
          padding={7}
          borderWidth={4}
          borderColor={theme.colors.creamRed}>
          <Image style={styles.avatar} source={{ uri: item.image }} />
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ItemAuthor;

const styles = StyleSheet.create({
  totalRead: {
    color: ' #19191B',
    fontSize: 16,
    marginTop: 3,
    lineHeight: 21,
    fontWeight: '900',
  },
  textQuantity: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 14,
    marginLeft: 11,
    width: 122,
  },
  totalRate: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#19191B',
    marginLeft: 3.21,
  },
  textRate: {
    marginTop: 17,
    marginLeft: 22,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
  },
  nameAuthor: {
    marginTop: 11,
    marginLeft: 22,
    fontWeight: '600',
    lineHeight: 21,
    color: '#19191B',
  },
  textName: {
    marginTop: 22,
    marginLeft: 22,
    color: '#464444',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 40,
    margin: 7,
  },
});
