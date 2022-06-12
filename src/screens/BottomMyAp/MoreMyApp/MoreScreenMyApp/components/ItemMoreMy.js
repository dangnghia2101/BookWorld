import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const ItemMoreMy = () => {
  return (
    <Block
      marginHorizontal={25}
      marginVertical={10}
      marginTop={100}
      row
      justifyContent={'space-between'}>
      <View style={styles.dataContainer}>
        <Text center marginTop={10}>
          Tổng thời gian đọc
        </Text>
        <View style={styles.textDataContainer}>
          <Text style={styles.textData} center>
            1280
          </Text>
        </View>

        <Text center>phút</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text center marginTop={10}>
          Số sách đã đọc
        </Text>
        <View style={styles.textDataContainer}>
          <Text style={styles.textData} center>
            23
          </Text>
        </View>
      </View>
    </Block>
  );
};

export default ItemMoreMy;

const styles = StyleSheet.create({
  dataContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 171,
    height: 150,
    flexDirection: 'column',
  },
  textDataContainer: {
    height: 90,
    justifyContent: 'center',
  },
  textData: {
    fontSize: 40,
  },
});
