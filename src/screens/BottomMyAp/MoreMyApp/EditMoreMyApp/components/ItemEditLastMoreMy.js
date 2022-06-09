import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';

const ItemEditLastMoreMy = () => {
  return (
    <Block marginHorizontal={40} style={styles.itemContainer2}>
      <Pressable style={[styles.buttonLastMoreMy, styles.shadowColor]}>
        <Text style={styles.text2}>Đăng xuất</Text>
      </Pressable>
    </Block>
  );
};

export default ItemEditLastMoreMy;

const styles = StyleSheet.create({
  itemContainer2: {
    marginVertical: 40,
  },
  buttonLastMoreMy: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginTop: 100,
    backgroundColor: '#D45555',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
