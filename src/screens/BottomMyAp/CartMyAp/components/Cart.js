import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Pressable,
    ScrollView,
} from 'react-native';
import React, {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { Block, Text, HeaderWithButton, Button } from '@components';
import { theme } from '@theme';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@navigation/routes';
import { CheckBox } from 'react-native-elements';
import IconView from '@components/Icon';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'themeNew';
import DetailCart from './DetailCart';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { useAppSelector } from '@hooks';
import { useAppDispatch } from 'hooks';
import { saveStatusCartReducer } from '@redux/reducerNew/cartReducer';

const Cart = () => {
    const navigation = useNavigation();
    const [allPrice, setAllPrice] = useState();
    const [cartItem, setCartItem] = useState({});
    const [data, setData] = useState({});
    const [themeBack, setThemeBack] = useState(true); //True background white
    const inset = useSafeAreaInsets();
    const snapPoints = useMemo(() => [440 + inset.bottom], [inset.bottom]);
    const bottomSheetRef = useRef(null);
    const bookStore = useAppSelector(state => state.root.cart.cartList);
    const dispatch = useAppDispatch();
    let all = 0;

    useEffect(() => {
        if (cartItem?.chapter) {
            var chapter = Object.keys(cartItem?.chapter);
            setData(chapter);
        }
    }, [cartItem?.chapter]);
    useEffect(() => {
        bottomSheetRef.current?.snapToIndex(0);
    }, [cartItem]);
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
    // console.log('>>>>>>>>priceBook');
    const renderItem = ({ item, index }) => {
        let sum = 0;
        const priceBook = () => {
            for (const i in item.chapter) {
                console.log(`item.chapter.${i} = ${item.chapter[i].price}`);
                sum += item.chapter[i].price;
            }
            if (item.status == true) {
                setAllPrice((all += sum));
            }
            return sum;
        };
        const detailCart = () => {
            setCartItem({ ...item, priceBook: sum });
            // bottomSheetRef.current?.snapToIndex(0);
        };

        // console.log('>>>>>>>>>>>>>> CartItem', cartItem);
        return (
            <TouchableOpacity
                style={styles.ItemCart}
                onPress={() => detailCart(item)}>
                <Block row marginVertical={10}>
                    {item.status ? (
                        <TouchableOpacity
                            style={styles.CheckBox1}
                            onPress={() => {
                                dispatch(
                                    saveStatusCartReducer({
                                        index: index,
                                        status: false,
                                    }),
                                );
                            }}>
                            <Entypo name={'check'} size={18} color={'white'} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.CheckBox}
                            onPress={() => {
                                dispatch(
                                    saveStatusCartReducer({
                                        index: index,
                                        status: true,
                                    }),
                                );
                            }}
                        />
                    )}
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                        resizeMode="cover"
                    />
                    <Block marginHorizontal={10} marginTop={10} width={'55%'}>
                        <Text numberOfLines={2} size={20} fontType={'bold'}>
                            {item.name}
                        </Text>
                        <Text
                            color="#9D9D9D"
                            size={14}
                            numberOfLines={1}
                            marginTop={5}>
                            Số tập: {Object.keys(item.chapter).length}
                        </Text>
                        <Text style={styles.TextPrice}>
                            {' '}
                            {priceBook()
                                .toFixed(0)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
                            đ
                        </Text>
                    </Block>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../../assets/icons/delete.png')}
                        />
                    </TouchableOpacity>
                </Block>
            </TouchableOpacity>
        );
    };
    const renderChapterItem = body => {
        const { item } = body;
        return (
            <TouchableOpacity style={styles.ItemCart1}>
                <Block style={styles.chap} row marginVertical={10}>
                    <Text size={14}>
                        Chương{' '}
                        {cartItem?.chapter[item]?.chapterNumber &&
                            cartItem.chapter[item].chapterNumber}
                    </Text>
                </Block>
            </TouchableOpacity>
        );
    };

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
                            Nhấn “ Thanh toán “ đồng nghĩa với việc bạn đồng ý
                            tuân theo điều khoản của Bookword
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
                            {allPrice
                                ? allPrice &&
                                  allPrice
                                      .toFixed(0)
                                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                                : 0}
                            đ
                        </Text>
                    </Block>
                    <TouchableOpacity
                        style={styles.BottomCheckOut}
                        // onPress={() => navigation.navigate(routes.PAYMENT_METHODS)}
                        onPress={() => navigation.navigate(routes.DETAIL_CART)}>
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
                            <Image
                                style={styles.image1}
                                source={{ uri: cartItem?.image }}
                            />
                        </Block>
                        <Block width={'53%'} marginLeft={10} marginTop={8}>
                            <Text size={20} style={styles.Name}>
                                {cartItem?.name}
                            </Text>
                            <Text style={styles.Price}>
                                {cartItem?.priceBook &&
                                    cartItem?.priceBook
                                        .toFixed(0)
                                        .replace(
                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                            '$1.',
                                        )}{' '}
                                đ
                            </Text>
                        </Block>
                        <TouchableOpacity onPress={() => {}}>
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
                    {/* <Block
                        marginTop={10}
                        width={'100%'}
                        height={0.2}
                        backgroundColor={'#979797'}
                        borderWidth={0.2}
                    /> */}
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
        height: 100,
        paddingBottom: 10,
    },
    ItemCart1: {
        width: '27%',
        backgroundColor: '#CDCDCD',
        marginTop: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        borderRadius: 5,
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
        height: 175,
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
        backgroundColor: 'rgba(212, 85, 85,0.8)',
        paddingBottom: 2,
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
    Container: { flex: 1 },
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
