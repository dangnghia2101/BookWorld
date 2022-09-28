import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Image} from 'react-native';

const BodyEditMoreMy = ({name, image, email}) => {
  return (
    <Block style={styles.container}>
      <Block style={[styles.itemUser, styles.shadowColor]} center>
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
        <Block row>
          <Image
            source={{
              uri: image,
            }}
            style={styles.imageRank}
          />
          <Image
            source={{
              uri: image,
            }}
            style={styles.imageRank}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default BodyEditMoreMy;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 116,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemUser: {
    width: '85%',
    height: 276,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  imageInformation: {
    width: 144,
    height: 144,
    borderRadius: 15,
  },
  imageRank: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  textUser: {
    fontSize: 18,
    color: '#000000',
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
});
