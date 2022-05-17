import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text} from '@components';
import {theme} from '@theme';

const ItemSMS = ({item, copyPhoneNumber}) => {
  return (
    <TouchableOpacity
      onPress={() => copyPhoneNumber(item.phone)}
      activeOpacity={0.8}
      style={styles.item}>
      <Block width={'30%'}>
        <Text
          center
          fontType={'bold'}
          size={14}
          color={item.is_active ? theme.colors.green : theme.colors.red}>
          {item.is_active === 1 ? 'Kích hoạt' : 'Chưa \n kích hoạt'}
        </Text>
      </Block>
      <Block flexGrow>
        <Text style={styles.textItem}>{item.owner_type}</Text>
        <Text style={styles.textItem}>
          Số điện thoại: <Text fontType={'bold'}>{item.phone}</Text>
        </Text>
        <Text style={styles.textItem}>Ngày tạo: {item.created_on}</Text>
      </Block>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginTop: 8,
    marginHorizontal: 16,
    shadowColor: '#9a8888',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 5,
  },
  textItem: {
    marginBottom: 5,
    color: '#000',
    fontWeight: '500',
  },
});
export default ItemSMS;
