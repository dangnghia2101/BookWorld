import { Block, Button, Text } from '@components';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useAppSelector } from '@hooks';
import { routes } from '@navigation/routes';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Pressable,
    Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'hooks';
import { useTheme } from 'themeNew';
import { saveCartReducer } from '@redux/reducerNew/cartReducer';
import { saveChapterReducer } from '@redux/reducerNew/cartReducer';
import Fontisto from 'react-native-vector-icons/Fontisto';

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

const ChapterBook = ({
    detailBook,
    nameBook,
    isRead,
    setIsRead,
    infoBook,
    // navigation,
}) => {
    const [visible, setVisible] = useState(false);
    const [chapItem, setChapItem] = useState();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const bookStore = useAppSelector(state => state.root.cart.cartList);
    const dispatch = useAppDispatch();

    const addCart = _item => {
        // console.log('................nó load lại nè', bookStore);
        const data = {
            _id: infoBook._id,
            name: infoBook.name,
            isPrice: infoBook.isPrice,
            image: infoBook.image,
            chapter: {_item},
            status: false,
        };

        let co = 0;
        bookStore.map(item => {
            if (item._id === infoBook._id) {
                co = 1;
                return;
            }
        });
        if (co === 0) {
            dispatch(saveCartReducer(data));
        }else{
            addChapter(_item);
        }
        setVisible(false);
    };
    const addChapter = chapter => {
        bookStore.map((item, index) => {
            if (item._id === infoBook._id) {
                const data = {
                    _id: chapter._id,
                    title: chapter.title,
                    price: chapter.price,
                    chapterNumber: chapter.chapterNumber,
                };
                dispatch(saveChapterReducer({ data, index }));
                return;
            }
        });
    };
    useEffect(() => {
        if (isRead) {
            setData(
                detailBook?.filter(item => item?.element?.htmlChapter !== ''),
            );
        } else {
            setData(
                detailBook?.filter(
                    item => item?.element?.linkAudio?.length > 0,
                ),
            );
        }
    }, [detailBook, isRead]);

    return (
        <Block
            width={WINDOW_WIDTH - 50}
            alignSelf="center"
            marginBottom={100}
            flex>
            <Block
                width={200}
                row
                alignSelf="center"
                marginTop={30}
                justifyCenter>
                <Button onPress={() => setIsRead(true)}>
                    <Block
                        backgroundColor={
                            isRead
                                ? themeNew.colors.primary
                                : themeNew.colors.grey14
                        }
                        paddingHorizontal={15}
                        paddingVertical={5}
                        style={styles.containerTabLeft}>
                        <Text
                            color={
                                isRead
                                    ? themeNew.colors.text
                                    : themeNew.colors.grey10
                            }
                            fontType={'bold'}
                            size={12}>
                            Sach doc
                        </Text>
                    </Block>
                </Button>
                <Button onPress={() => setIsRead(false)}>
                    <Block
                        backgroundColor={
                            isRead
                                ? themeNew.colors.grey14
                                : themeNew.colors.primary
                        }
                        paddingHorizontal={15}
                        paddingVertical={5}
                        style={styles.containerTabRight}>
                        <Text
                            color={
                                !isRead
                                    ? themeNew.colors.text
                                    : themeNew.colors.grey10
                            }
                            fontType={'bold'}
                            size={12}>
                            Sach Nghe
                        </Text>
                    </Block>
                </Button>
            </Block>
            <Text
                marginTop={5}
                color={themeNew.colors.textInBox}
                fontType={'bold'}
                size={20}>
                Tập
            </Text>
            <Block
                row
                width={'100%'}
                marginBottom={20}
                style={{ flexWrap: 'wrap' }}>
                {data?.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => {
                            if (item.ispay == true) {
                                if (isRead) {
                                    navigation.navigate(
                                        routes.PLAY_BOOK_MY_AP,
                                        item.element,
                                    );
                                } else {
                                    navigation.navigate(routes.LISTEN_BOOK, {
                                        item: item.element,
                                        nameBook: nameBook,
                                    });
                                }
                            } else {
                                console.log('showw modal');
                                setChapItem(item.element);
                                setVisible(true);
                            }
                        }}
                        style={styles.button}>
                        <Block
                            alignCenter
                            justifyCenter
                            radius={5}
                            width={'100%'}
                            backgroundColor={
                                item.ispay
                                    ? themeNew.colors.primary
                                    : themeNew.colors.grey12
                            }
                            paddingVertical={10}
                            paddingHorizontal={5}>
                            <Text>{item.element.chapterNumber}</Text>
                        </Block>
                    </TouchableOpacity>
                ))}
            </Block>

            <ModalPoup visible={visible}>
                <Block style={styles.clone}>
                    <Fontisto
                        name={'close-a'}
                        size={20}
                        color={'black'}
                        onPress={() => {
                            setVisible(false);
                        }}
                    />
                </Block>
                <Block alignCenter={'center'}>
                    <Text style={styles.textOTP} center>
                        Mua để có thể xem sách
                    </Text>
                    <Text size={16} center>
                        Chương {chapItem?.chapterNumber}
                    </Text>
                    <TouchableOpacity
                        style={styles.buttomAddCart}
                        onPress={() => addCart(chapItem)}>
                        <Text style={styles.textButtomLogin} height={55}>
                            Thêm vào giỏ hàng
                        </Text>
                    </TouchableOpacity>
                </Block>
            </ModalPoup>
        </Block>
    );
};

const styles = StyleSheet.create({
    textButtomLogin: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
    buttomAddCart: {
        width: '88%',
        height: 59,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#DD4455',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,

        elevation: 7,
    },
    clone: {
        alignItems: 'flex-end',
        marginRight: 20,
    },
    textOTP: {
        marginTop: 20,
        fontWeight: '700',
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
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '18%',
        margin: 3,
    },
    containerTabLeft: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    containerTabRight: {
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
});

export default ChapterBook;
