import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';

import IconView from '@components/Icon';

const ItemLastMoreMy = () => {
  return (
    <Block marginHorizontal={40} style={styles.itemContainer2}>
      <Pressable row marginVertical={20}>
        <IconView
          component={'AntDesigns'}
          name={'infocirlceo'}
          size={20}
          style={styles.iconLastMoreMy}
        />
        <Text style={styles.textLastMoreMy2}>About</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.textLastMoreMy}>Đăng xuất</Text>
      </Pressable>
      <Pressable style={[styles.buttonLastMoreMy, styles.shadowColor]}>
        <Text style={styles.text2}>Update</Text>
      </Pressable>
    </Block>
  );
};

export default ItemLastMoreMy;

const styles = StyleSheet.create({
  itemContainer2: {
    marginVertical: 40,
  },
  buttonLastMoreMy: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginTop: 50,
    backgroundColor: '#D45555',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconInformation2: {},
  text2: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconLastMoreMy: {
    position: 'absolute',
  },
  textLastMoreMy: {
    color: 'black',
    fontSize: 17,
    position: 'absolute',
  },
  textLastMoreMy2: {
    color: 'black',
    fontSize: 17,
    position: 'absolute',
    left: 35,
  },
});
