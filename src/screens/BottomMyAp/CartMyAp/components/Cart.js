import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Modal,
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
// import { theme } from '@theme';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@navigation/routes';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, useTheme } from 'themeNew';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAppSelector } from '@hooks';
import { useAppDispatch } from 'hooks';
import { saveStatusCartReducer } from '@redux/reducerNew/cartReducer';
import { removeItem } from '@redux/reducerNew/cartReducer';
import { removeChapter } from '@redux/reducerNew/cartReducer';
import { theme } from '@theme';
import { withNamespaces } from 'react-i18next';
const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    };
    return (
        <Modal transparent visible={showModal}>
            <Block flex={1} style={styles.modalBackGround}>
                <Block style={styles.modalContainer}>{children}</Block>
            </Block>
        </Modal>
    );
};

const Cart = ({ t }) => {
    const [visibleCart, setVisibleCart] = useState(false);
    const navigation = useNavigation();
    const [allPrice, setAllPrice] = useState();
    const [cartItem, setCartItem] = useState([]);
    const [data, setData] = useState([]);
    const [themeBack, setThemeBack] = useState(true); //True background white
    const inset = useSafeAreaInsets();
    const snapPoints = useMemo(() => [440 + inset.bottom], [inset.bottom]);
    const bottomSheetRef = useRef(null);
    const bookStore = useAppSelector(state => state.root.cart.cartList);
    const dispatch = useAppDispatch();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const theme = useTheme(themeStore);
    let all = 0;

    useEffect(() => {
        if (cartItem?.chapter) {
            var chapter = Object.keys(cartItem?.chapter);
            setData(chapter);
        }
    }, [cartItem?.chapter]);
    useEffect(() => {
        setAllPrice((all = 0));
    }, [bookStore != 0]);
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
    const renderItem = ({ item, index }) => {
        let sum = 0;
        const priceBook = () => {
            for (const i in item.chapter) {
                sum += item.chapter[i].price;
            }
            if (item.status == true) {
                setAllPrice((all += sum));
            }
            return sum;
        };
        const detailCart = () => {
            let SL = Object.keys(item.chapter).length;
            setCartItem({ ...item, priceBook: sum, index: index, SL: SL });
            bottomSheetRef.current?.snapToIndex(0);
        };
        // console.log('>>>>>>>>>>>>>> CartItem', cartItem.SL);
        bookStore.map(item => {
            if (item.status == false) {
                setAllPrice((all += 0));
            }
        });

        return (
            <TouchableOpacity
                style={styles.ItemCart}
                onPress={() => detailCart(item, index)}>
                <Block row marginVertical={10}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                        resizeMode="cover"
                    />
                    <Block marginHorizontal={20} marginTop={5} width={'55%'}>
                        <Text numberOfLines={1} size={20} fontType={'bold1'}>
                            {item.name}
                        </Text>
                        <Text
                            color="#9D9D9D"
                            size={14}
                            numberOfLines={1}
                            marginTop={5}
                            fontType={'medium1'}>
                            {t('numberOfEpisodes')}: {Object.keys(item.chapter).length}
                        </Text>
                        <Text fontType={'medium1'} style={styles.TextPrice}>
                            {priceBook()
                                .toFixed(0)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
                            đ
                        </Text>
                    </Block>
                    <TouchableOpacity
                        style={{
                            alignItems: 'flex-start',
                            width: 40,
                            position: 'absolute',
                            marginLeft: '95%',
                            marginTop: '26%'
                        }}
                        onPress={() => {
                            setVisibleCart(true);
                        }}>
                        <Feather
                            name={'trash-2'}
                            size={18}
                            color={theme.colors.grey1}
                        />
                    </TouchableOpacity>
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
                            <AntDesign
                                name={'checkcircle'}
                                size={23}
                                color={theme.colors.primary}
                            />
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
                            }}>
                            <AntDesign
                                name={'checkcircleo'}
                                size={23}
                                color={'gray'}
                            />
                        </TouchableOpacity>
                    )}
                </Block>
                <ModalPoup visible={visibleCart}>
                    <Block style={styles.clone}>
                        <Fontisto
                            name={'close-a'}
                            size={18}
                            color={'black'}
                            onPress={() => {
                                setVisibleCart(false);
                            }}
                        />
                    </Block>
                    <Block alignCenter={'center'}>
                        <Text fontType={'medium1'} style={styles.textOTP} center>
                            {t('askRemove')}
                        </Text>
                        <Block>
                            <Image
                                source={require('../../../../assets/icons/faile.png')}
                                style={{ width: 80, height: 80 }}
                            />
                        </Block>
                        <TouchableOpacity
                            style={styles.buttomAddCart}
                            onPress={() => {
                                dispatch(removeItem({ _id: item._id })),
                                    { setVisibleCart: setVisibleCart(false) };
                            }}>
                            <Text fontType={'bold1'} style={styles.textButtomLogin} height={55}>
                                {t('delete')}
                            </Text>
                        </TouchableOpacity>
                    </Block>
                </ModalPoup>
            </TouchableOpacity>
        );
    };
    const renderChapterItem = ({ item, index }) => {
        return (
            <Block style={styles.ItemCart1}>
                <TouchableOpacity
                    onPress={() => {
                        {
                            cartItem.SL !== 1
                                ? (console.log(
                                    '................... Xóa chương',
                                ),
                                    dispatch(
                                        removeChapter({
                                            element: item,
                                            index: cartItem.index,
                                            keyChapter:
                                                cartItem?.chapter[item]
                                                    ?.chapterNumber,
                                        }),
                                    ),
                                    setCartItem(
                                        data.filter(
                                            (item, index) =>
                                                index != item.chapterNumber,
                                        ),
                                    ))
                                : (console.log(
                                    '................... Xoasaaa Sách',
                                    cartItem._id,
                                ),
                                    dispatch(removeItem({ _id: cartItem._id })));
                        }
                    }}>
                    <Entypo
                        name={'cross'}
                        size={16}
                        color={'black'}
                        style={styles.hide}
                    />
                </TouchableOpacity>
                <Block style={styles.chap} row marginVertical={10}>
                    <Text size={14}>
                        Chương{' '}
                        {cartItem?.chapter[item]?.chapterNumber &&
                            cartItem.chapter[item].chapterNumber}
                    </Text>
                </Block>
            </Block>
        );
    };

    return (
        <Block backgroundColor={theme.colors.background} style={styles.Container}>
            <Block
                justifyCenter
                alignCenter
                marginTop={10}
                backgroundColor={theme.colors.background}
                height={50}
                row>
                <Text fontType='bold1' color={theme.colors.textInBox} size={20} style={styles.textTitle}>
                    {t('yourCart')}
                </Text>
            </Block>
            <Block height={'80%'}>
                {bookStore == [] ? (
                    <Block alignCenter>
                        <Text color={theme.colors.textInBox} center marginTop={260} size={16}>
                            Giỏ hàng trống
                        </Text>
                    </Block>
                ) : (
                    <FlatList
                        data={bookStore}
                        renderItem={renderItem}
                        keyExtractor={item => Math.random()}
                        showsVerticalScrollIndicator={false}
                        style={styles.FlatList}
                    />
                )}
            </Block>
            <Block bottom={7}>
                <Block
                    row
                    width={'100%'}
                    paddingHorizontal={5}
                    paddingVertical={5}
                    backgroundColor={theme.colors.background}
                    style={styles.ContainerCheckOut}
                    marginTop={10}>
                    <Block marginLeft={10}>
                        <Text fontType={'medium1'} color={theme.colors.textInBox} size={16} style={styles.TextCart}>
                            {t('toTal')}
                        </Text>
                        <Text
                            fontType={'bold1'}
                            color="#D45555"
                            size={20}
                            style={styles.TextCart}
                            marginTop={5}>
                            {allPrice
                                ? allPrice &&
                                allPrice
                                    .toFixed(0)
                                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                                : 0}{' '}
                            đ
                        </Text>
                    </Block>
                    <TouchableOpacity
                        disabled={allPrice === 0}
                        onPress={() =>
                            navigation.navigate(routes.DETAIL_CART, {
                                allPrice: allPrice,
                            })
                        }
                        style={styles.BottomCheckOut(allPrice)}>
                        <Text fontType={'blod1'} marginRight={10} color="#ffffff" size={18}>
                            {t('buy')}
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
                        <Block width={'53%'} marginTop={25}>
                            <Text fontType={'bold1'} size={20} style={styles.Name}>
                                {cartItem?.name}
                            </Text>
                            <Text fontType={'medium1'} style={styles.Price}>
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
                        <TouchableOpacity onPress={() => { }}>
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
                        height={1}
                        backgroundColor={'#979797'}
                        borderWidth={0.1}
                    />
                    <Text
                        marginVertical={10}
                        marginLeft={30}
                        style={styles.Name}
                        size={20}>
                        {t('chapTer')}
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
                </Block>
            </BottomSheet>
        </Block>
    );
};

const styles = StyleSheet.create({
    buttomAddCart: {
        width: '88%',
        height: 59,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.creamRed,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,

        elevation: 7,
    },
    textButtomLogin: {
        fontSize: 18,
        color: 'white',
    },
    clone: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    textOTP: {
        marginTop: 20,
        fontSize: 16,
        marginBottom: 20,
    },
    modalContainer: {
        width: '75%',
        backgroundColor: 'rgba(253,253,253,10)',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 30,
        borderColor: 'black',
    },
    modalBackGround: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    hide: {
        position: 'absolute',
        marginLeft: 85,
    },
    textBottom: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    Bottom: {
        marginLeft: '5%',
        marginTop: 20,
        height: 50,
        width: '90%',
        backgroundColor: theme.colors.lightRed,
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
        height: 45,
        justifyContent: 'center',
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
        lineHeight: 30,
    },
    Price: {
        marginTop: 10,
        fontSize: 20,
        color: '#D45555',
    },
    Container1: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    image1: {
        width: 100,
        height: 125,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    CheckBox1: {
        width: 27,
        height: 27,
        alignItems: 'center',
        marginTop: 42,
        paddingBottom: 2,
    },
    CheckBox: {
        width: 27,
        height: 27,
        alignItems: 'center',
        marginTop: 42,
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
        marginTop: 5,
        color: '#D45555',
        fontSize: 20,
    },
    BottomCheckOut: item => ({
        marginRight: 15,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 100,
        height: 50,
        backgroundColor: item === 0 ? '#bdc3c7' : theme.colors.lightRed,
        borderRadius: 10,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
    }),
    BottomCheckOut1: {
        marginRight: 15,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 100,
        height: 50,
        backgroundColor: '#D45555',
        borderRadius: 10,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 90,
        height: 120,
    },
    FlatList: {},
    ContainerCheckOut: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Container: { flex: 1, marginTop: 50, marginBottom: 5 },
    ItemCart: {
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        width: '95%',
        height: 140,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: theme.colors.gray2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 11.14,

        elevation: 17,
    },
    TextCart: {
        fontWeight: '600',
    },
});
export default withNamespaces()(Cart);

