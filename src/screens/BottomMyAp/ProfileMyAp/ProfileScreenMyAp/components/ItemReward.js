import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Block} from '@components';

const ItemReward = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.item}>
      <Block width={'36%'}>
        <Text style={styles.textItemLeft}>{item.kihoc}</Text>
      </Block>
      <Block flex={1}>
        <Text style={styles.textItem}>Ngày tháng: {item.ngaynhanthuong}</Text>
        <Text style={styles.textItem}>Nội dung: {item.noidung}</Text>
        <Text style={styles.textItem}>Người ký: {item.nguoiky}</Text>
        <Text style={styles.textItem}>Số quyết định: {item.soquyetdinh}</Text>
      </Block>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textItem: {
    marginBottom: 5,
    color: '#000',
    fontWeight: '500',
  },
  textItemLeft: {
    marginRight: 10,
    color: 'green',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
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
});
export default ItemReward;
