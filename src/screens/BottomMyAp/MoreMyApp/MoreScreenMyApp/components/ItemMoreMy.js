import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import IconView from '@components/Icon';

const ItemMoreMy = () => {
  return (
    <Block marginHorizontal={25} style={styles.itemContainer2}>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Không biết ghi gì</Text>
      </Pressable>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Không biết ghi gì</Text>
      </Pressable>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Không biết ghi gì</Text>
      </Pressable>
      <Pressable style={[styles.button2, styles.shadowColor]}>
        <Block style={styles.iconItemMoreMy}>
          <IconView component={'AntDesigns'} name={'right'} size={15} />
        </Block>
        <Text style={styles.text2}>Trợ giúp</Text>
      </Pressable>
    </Block>
  );
};

export default ItemMoreMy;

const styles = StyleSheet.create({
  itemContainer2: {
    top: 40,
  },
  button2: {
    width: '100%',
    height: 55,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
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
