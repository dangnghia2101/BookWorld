import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useMemo, useCallback, useEffect, useRef} from 'react';
import {Block, Text, HeaderWithButton, Button} from '@components';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import {CheckBox} from 'react-native-elements';
import IconView from '@components/Icon';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'themeNew';
import DetailCart from './DetailCart';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useAppSelector} from '@hooks';

const Cart = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [themeBack, setThemeBack] = useState(true); //True background white
  const inset = useSafeAreaInsets();
  const snapPoints = useMemo(() => [570 + inset.bottom], [inset.bottom]);
  const bottomSheetRef = useRef(null);
  const bookStore = useAppSelector(state => state.root.cart.cartList);
  // console.log('>>>>>>>>>>> giỏ hàng', bookStore);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
        enableTouchThrough={true}
      />
    ),
    [],
  );
  const numColumns = 3;
  const renderChapterItem = ({item}) => {
    const {chap} = item;
    return (
      <TouchableOpacity style={styles.ItemCart1}>
        <Block style={styles.chap} row marginVertical={10}>
          <Text size={14}>{chap}</Text>
        </Block>
      </TouchableOpacity>
    );
  };
  const renderItem = ({item}) => {
    const detailCart = ({item}) => {
      bottomSheetRef.current?.snapToIndex(0);
    };
    return (
      <TouchableOpacity
        style={styles.ItemCart}
        onPress={() => detailCart(item)}>
        <Block row marginVertical={10}>
          <TouchableOpacity style={styles.CheckBox} />
          <Image
            style={styles.image}
            source={{uri: item.image}}
            resizeMode="cover"
          />
          <Block marginHorizontal={10} marginTop={10} width={'55%'}>
            <Text numberOfLines={2} size={20} fontType={'bold'}>
              {item.name}
            </Text>
            <Text color="#9D9D9D" size={12} numberOfLines={1} marginTop={5}>
              {item.chapter}
            </Text>
            <Text style={styles.TextPrice}> {item.isPrice} đ</Text>
          </Block>
          <TouchableOpacity>
            <Image source={require('../../../../assets/icons/delete.png')} />
          </TouchableOpacity>
        </Block>
      </TouchableOpacity>
    );
  };
  var TongGIa = 15000;
  return (
    <Block style={styles.Container}>
      <HeaderWithButton title={'Giỏ hàng'} />
      <FlatList
        data={bookStore}
        renderItem={renderItem}
        keyExtractor={item => Math.random()}
        showsVerticalScrollIndicator={false}
        style={styles.FlatList}
      />

      <Block bottom={0}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.DETAIL_CART)}>
          <Block
            row
            width={'100%'}
            height={45}
            paddingHorizontal={10}
            backgroundColor={'white'}
            marginTop={10}>
            <Image
              marginTop={10}
              source={require('../../../../assets/icons/note.png')}
            />
            <Text marginLeft={5} lineHeight={20}>
              Nhấn “ Thanh toán “ đồng nghĩa với việc bạn đồng ý tuân theo điều
              khoản của Bookword
            </Text>
          </Block>
        </TouchableOpacity>
        <Block
          row
          width={'100%'}
          paddingHorizontal={5}
          backgroundColor={'white'}
          style={styles.ContainerCheckOut}
          marginTop={10}>
          <Block>
            <Text size={20} style={styles.TextCart}>
              Tổng:
            </Text>
            <Text
              color="#D45555"
              size={20}
              style={styles.TextCart}
              marginTop={5}>
              {TongGIa} đ
            </Text>
          </Block>
          <TouchableOpacity
            style={styles.BottomCheckOut}
            onPress={() => navigation.navigate(routes.PAYMENT_METHODS)}>
            <Text marginRight={10} color="#ffffff" size={20}>
              Thanh toán
            </Text>
            <Image
              marginTop={5}
              source={require('../../../../assets/icons/nextCheckOut.png')}
            />
          </TouchableOpacity>
        </Block>
      </Block>
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}>
        <Block>
          <Block row style={styles.Container1}>
            <Block>
              <Image style={styles.image1} source={{uri: bookStore.image}} />
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
          <Text
            marginVertical={10}
            marginLeft={30}
            style={styles.Name}
            size={20}>
            Chương
          </Text>
          <Block paddingLeft={10}>
            <FlatList
              style={styles.FlatList1}
              data={data}
              renderItem={renderChapterItem}
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
      </BottomSheet>
    </Block>
  );
};

export default Cart;

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
  FlatList1: {
    height: '45%',
  },
  ItemCart1: {
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
  Container1: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  image1: {
    width: 120,
    height: 145,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  CheckBox1: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.7,
    marginTop: 45,
    marginRight: 5,
    backgroundColor: 'red',
  },
  CheckBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.7,
    marginTop: 45,
    marginRight: 5,
  },
  AllPay: {
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  Pay: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextName: {
    fontSize: 20,
  },
  TextPrice: {
    marginLeft: '40%',
    color: '#D45555',
    fontSize: 20,
    fontWeight: '700',
  },
  BottomCheckOut: {
    marginVertical: 10,
    flexDirection: 'row',
    marginLeft: 100,
    height: 60,
    backgroundColor: '#D45555',
    borderRadius: 10,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 90,
    height: 120,
  },
  FlatList: {
    paddingBottom: 20,
  },
  ContainerCheckOut: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Container: {flex: 1},
  ItemCart: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    width: '95%',
    height: 140,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  TextCart: {
    fontWeight: '600',
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
    chap: 'Chương 13',
  },
  {
    chap: 'Chương 14',
  },
  {
    chap: 'Chương 15',
  },
];
