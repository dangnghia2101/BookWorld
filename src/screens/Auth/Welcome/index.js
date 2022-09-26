import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Animated,
  Pressable,
  LogBox
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ItemWelcome from './components/ItemWelcome';
import { data } from './components/data';
import { Block, Text } from '@components';
import Login from '../Login/index';
const { width, heigth } = Dimensions.get('window');
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
LogBox.ignoreAllLogs();
const Welcome = () => {
  const navigation = useNavigation();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  console.log(data);
  if (data && data.length) {
    return (
      <View style={styles.Container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <ItemWelcome item={item} key={index} />;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
        />
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                styles={{
                  opacity,
                  heigth: 10,
                  width: 10,
                  background: '#595959',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
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
    height: '100%',
    paddingTop: 40,
    backgroundColor: 'white',
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
