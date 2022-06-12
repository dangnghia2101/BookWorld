import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import IconView from '@components/Icon';

const ItemEditMoreMy = () => {
  return (
    <Block marginHorizontal={25} style={styles.itemContainer2}>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Chỉnh sửa thông tin</Text>
      </Pressable>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Phản hồi và chia sẻ</Text>
      </Pressable>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Lịch sử thanh toán</Text>
      </Pressable>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Chính sách</Text>
      </Pressable>
    </Block>
  );
};

export default ItemEditMoreMy;

const styles = StyleSheet.create({
  itemContainer2: {
    top: 100,
  },
  button2: {
    width: '100%',
    height: 55,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
  },
  shadowColor: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  iconItemMoreMy: {
    position: 'absolute',
    right: 20,
  },
  text2: {
    position: 'absolute',
    left: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
