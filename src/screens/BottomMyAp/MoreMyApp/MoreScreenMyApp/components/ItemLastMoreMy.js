import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const ItemLastMoreMy = () => {
  return (
    <Block marginHorizontal={26}>
      <Text style={styles.textLastMoreMy}>Bảng xếp hạng</Text>
      <Block row style={styles.itemContainer} padding={10}>
        <Block row justifyContent={'center'} alignItems={'center'}>
          <Image source={require('../../../../../assets/images/Vector.png')} />
          <Image
            style={styles.imageRank}
            source={require('../../../../../assets/images/rank.png')}
          />
        </Block>
        <View style={styles.item}>
          <Text color="white" size={15}>
            Hồ Hoàng Phúc
          </Text>
          <Block marginVertical={10}>
            <Text color="#9A9B9B" size={10}>
              Tổng thời gian đọc
            </Text>
            <Text color="#9A9B9B" size={10}>
              Số sách đã đọc
            </Text>
          </Block>
        </View>
        <Block row justifyContent={'center'}>
          <View style={styles.rankContainer} opacity={0.15} />
          <Text style={styles.sttRank} fontSize={15} color="#FA4D96">
            1
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemLastMoreMy;

const styles = StyleSheet.create({
  textLastMoreMy: {
    marginVertical: 10,
    color: 'black',
    fontSize: 20,
  },
  itemContainer: {
    backgroundColor: '#242042',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  imageRank: {
    position: 'absolute',
  },
  item: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rankContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#FA4D96',
    borderRadius: 8,
  },
  sttRank: {
    position: 'absolute',
    top: 4.5,
  },
});
