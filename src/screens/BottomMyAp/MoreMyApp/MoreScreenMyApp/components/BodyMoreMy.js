import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Block, Text} from '@components';
import IconView from '@components/Icon';

const BodyMoreMy = () => {
  return (
    <Block flex marginHorizontal={20} style={styles.container}>
      <View style={[styles.itemMyContainer, styles.shadowColor]}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
            }}
            style={styles.imageInformation}
          />
        </View>
        <View style={styles.informationContainer}>
          <Text size={18}>Đặng Tuấn Nghĩa</Text>
          <Text style={styles.textInformation}>nghia@gmail.com</Text>
          <View style={styles.borderBottom} />
          <Text style={styles.textInformation}>+84 xxxxxxxxxx</Text>
          <View style={styles.borderBottom} />
          <Text style={styles.textInformation}>
            #To Ky, Tan Chanh Hiep, TP.HCM
          </Text>
        </View>
      </View>
      <Block row style={styles.itemContainer}>
        <Pressable style={[styles.button, styles.shadowColor]}>
          <IconView
            component={'Ionicons'}
            name={'bookmarks-outline'}
            size={20}
            style={styles.iconInformation}
          />
          <Text>Bookmarks</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.shadowColor]}>
          <IconView
            component={'Ionicons'}
            name={'notifications-outline'}
            size={20}
            style={styles.iconInformation}
          />
          <Text>Notifications</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.shadowColor]}>
          <IconView
            component={'Octicons'}
            name={'credit-card'}
            size={20}
            style={styles.iconInformation}
          />
          <Text>Payments</Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default BodyMoreMy;

const styles = StyleSheet.create({
  container: {},
  itemMyContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 10,
    marginTop: -10,
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
  imageContainer: {},
  imageInformation: {
    width: 100,
    height: 100,
    borderRadius: 200,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  informationContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textInformation: {
    opacity: 0.5,
    lineHeight: 25,
    width: '90%',
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    opacity: 0.5,
  },
  itemContainer: {
    justifyContent: 'space-around',
    top: 20,
  },
  button: {
    width: 95,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInformation: {},
});
