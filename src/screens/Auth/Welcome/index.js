import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Animated,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ItemWelcome from './components/ItemWelcome';
import {data} from './components/data';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';

import Paginator from './components/Paginator';

const {width, heigth} = Dimensions.get('window');
const Welcome = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  // const slidesRef = useRef(null);
  let position = Animated.divide(scrollX, width);
  console.log(data);
  if (data && data.length) {
    return (
      <View style={styles.Container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ItemWelcome item={item} />}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
        />
        <View style={styles.dot}>
          <Paginator scrollX={scrollX} data={data} />
        </View>
        <Block style={styles.allButtom}>
          <Pressable
            style={styles.buttomDangNhap}
            onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}>
            <Text style={styles.textDangNhap}>Đăng nhập</Text>
          </Pressable>
          <Pressable style={styles.buttomDangKy}>
            <Text
              style={styles.textDangKy}
              onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}>
              Đăng ký
            </Text>
          </Pressable>
        </Block>
      </View>
    );
  }
  return null;
};

export default Welcome;

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    marginTop: width / 0.94,
    marginLeft: '35%',
  },
  textDangKy: {
    color: 'black',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  textDangNhap: {
    fontFamily: 'Outfit',
    color: 'white',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  buttomDangKy: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 65,
    backgroundColor: '#F3F3F3',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  allButtom: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttomDangNhap: {
    backgroundColor: '#D45555',
    width: '48%',
    marginBottom: '20%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  textGioiThieu: {
    marginTop: 15,
    paddingHorizontal: 20,
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '400',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9D9D9D',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 77,
  },
  textWelcom: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#19191B',
  },
  Container: {
    position: 'relative',
    height: '100%',
    paddingTop: 40,
    backgroundColor: 'white',
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
