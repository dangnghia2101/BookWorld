import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Block, Text, HeaderWithButon} from '@components';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {CheckBox} from 'react-native-elements';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DetailCart = ({item}) => {
  console.log('>>>>>>>>>>>>>>item', item);
  const numColumns = 3;
  // const data = {
  //   _id: item._id,
  //   name: item.name,
  //   isPrice: item.isPrice,
  //   image: item.image,
  // };
  const renderItem = ({item}) => {
    const {chap} = item;
    return (
      <TouchableOpacity style={styles.ItemCart}>
        <Block style={styles.chap} row marginVertical={10}>
          <Text size={14}>{chap}</Text>
        </Block>
      </TouchableOpacity>
    );
  };
  return (
    <Block>
      <Block row style={styles.Container}>
        <Block>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/Logo.png')}
          />
        </Block>
        <Block width={'53%'} marginLeft={10} marginTop={8}>
          <Text size={20} style={styles.Name}>
            {/* {data.name} */}
          </Text>
          <Text style={styles.Price}>15.000đ</Text>
        </Block>
        <TouchableOpacity>
          <Fontisto
            name={'close-a'}
            size={20}
            color={'black'}
            style={styles.hide}
          />
        </TouchableOpacity>
      </Block>
      <Block
        marginTop={10}
        width={'100%'}
        height={0.2}
        backgroundColor={'#979797'}
        borderWidth={0.2}
      />
      <Text marginVertical={10} marginLeft={30} style={styles.Name} size={20}>
        Chương
      </Text>
      <Block paddingLeft={10}>
        <FlatList
          style={styles.FlatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => Math.random()}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
        />
      </Block>
      <Block
        marginTop={10}
        width={'100%'}
        height={0.2}
        backgroundColor={'#979797'}
        borderWidth={0.2}
      />
      <TouchableOpacity style={styles.Bottom}>
        <Text style={styles.textBottom}>Xác nhận</Text>
      </TouchableOpacity>
    </Block>
  );
};

export default DetailCart;

const styles = StyleSheet.create({
  textBottom: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  Bottom: {
    marginTop: 20,
    height: 50,
    width: '100%',
    backgroundColor: '#D45555',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  chap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatList: {
    height: '45%',
  },
  ItemCart: {
    width: '27%',
    backgroundColor: '#CDCDCD',
    marginTop: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 2,
  },
  Name: {
    fontWeight: '700',
    lineHeight: 30,
  },
  Price: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D45555',
  },
  Container: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  image: {
    width: 120,
    height: 145,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
  },
});

var data = [
  {
    chap: 'Chương 1',
  },
  {
    chap: 'Chương 2',
  },
  {
    chap: 'Chương 3',
  },
  {
    chap: 'Chương 4',
  },
  {
    chap: 'Chương 5',
  },
  {
    chap: 'Chương 6',
  },
  {
    chap: 'Chương 7',
  },
  {
    chap: 'Chương 8',
  },
  {
    chap: 'Chương 9',
  },
  {
    chap: 'Chương 10',
  },
  {
    chap: 'Chương 11',
  },
  {
    chap: 'Chương 12',
  },
  {
    chap: 'Chương 13',
  },
  {
    chap: 'Chương 14',
  },
  {
    chap: 'Chương 15',
  },
  {
    chap: 'Chương 12',
  },
  {
    chap: 'Chương 13',
  },
  {
    chap: 'Chương 14',
  },
  {
    chap: 'Chương 15',
  },
];
