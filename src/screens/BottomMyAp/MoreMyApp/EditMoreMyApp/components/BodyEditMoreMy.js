import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Image} from 'react-native';

const BodyEditMoreMy = ({name, image, email}) => {
  return (
    <Block>
      <Image
        style={styles.imageBanner}
        source={require('../../../../../assets/images/mask_group.png')}
      />
      <Block style={styles.ItemUser}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imageInformation}
        />
        <Text fontSize={18} center>
          {name}
        </Text>
        <Text fontSize={13}>{email}</Text>
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
    height: 500,
    backgroundColor: 'black',
    position: 'absolute',
    top: 140,
    alignItems: 'center',
  },
  textUser: {
    fontSize: 18,
    color: '#000000',
  },
});
