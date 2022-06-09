import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Image} from 'react-native';

const BodyEditMoreMy = () => {
  return (
    <Block>
      <Image
        style={styles.imageBanner}
        source={require('../../../../../assets/images/mask_group.png')}
      />
      <Block style={styles.ItemUser}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
          }}
          style={styles.imageInformation}
        />
        <Text fontSize={18} center>
          Đặng Tuấn Nghĩa
        </Text>
        <Text fontSize={13}>sumanyak@gmail.com</Text>
      </Block>
    </Block>
  );
};

export default BodyEditMoreMy;

const styles = StyleSheet.create({
  imageBanner: {
    width: '100%',
  },
  imageInformation: {
    width: 144,
    height: 144,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 200,
  },
  ItemUser: {
    width: '100%',
    position: 'absolute',
    top: 140,
    alignItems: 'center',
  },
  textUser: {
    fontSize: 18,
    color: '#000000',
  },
});
