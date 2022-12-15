import { Block, Button, Text } from '@components';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useAppSelector } from '@hooks';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import {
    saveCartReducer,
    saveChapterReducer,
} from '@redux/reducerNew/cartReducer';
import { useAppDispatch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';

const ChapterBook = ({
    detailBook,
    nameBook,
    isRead,
    setIsRead,
    infoBook,
    t,
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
    const [showModal, setShowModal] = React.useState(visible);
    const theme = useTheme(themeStore);
    const styles = useStyle(themeStore);

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

    const addAllCart = _item => {
        const data = {
            _id: infoBook._id,
            name: infoBook.name,
            isPrice: infoBook.isPrice,
            image: infoBook.image,
            chapter: { [_item.chapterNumber]: _item },
            status: false,
        };
    };
    const addCart = _item => {
        const data = {
            _id: infoBook._id,
            name: infoBook.name,
            isPrice: infoBook.isPrice,
            image: infoBook.image,
            chapter: { [_item.chapterNumber]: _item },
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
        } else {
            addChapter(_item);
        }
        setVisible(false);
    };
    const addChapter = chapter => {
        bookStore.map((item, index) => {
            if (item._id === infoBook._id) {
                const data = {
                    idChapter: chapter.idChapter,
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
        // if (isRead) {
        //     setData(
        //         detailBook?.filter(item => item?.element?.htmlChapter !== ''),
        //     );
        // } else {
        //     setData(
        //         detailBook?.filter(
        //             item => item?.element?.linkAudio?.length > 0,
        //         ),
        //     );
        // }

        setData(detailBook?.filter(item => item?.element?.htmlChapter !== ''));
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
                            fontType={'bold1'}
                            size={12}>
                            {t('bookToRead')}
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
                            fontType={'bold1'}
                            size={12}>
                            {t('bookToListen')}
                        </Text>
                    </Block>
                </Button>
            </Block>
            <Text
                marginTop={5}
                color={themeNew.colors.textInBox}
                fontType={'bold1'}
                size={20}>
                {t('chapTer')}
            </Text>
            <Block
                row
                width={'100%'}
                marginBottom={20}
                style={{ flexWrap: 'wrap' }}>
                {data?.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => {
                            if (item.isPay === true) {
                                if (isRead) {
                                    navigation.navigate(
                                        routes.PLAY_BOOK_MY_AP,
                                        {
                                            idChapter: item.idChapter,
                                            nameBook: nameBook,
                                        },
                                    );
                                } else {
                                    navigation.navigate(routes.LISTEN_BOOK, {
                                        idChapter: item.idChapter,
                                        nameBook: nameBook,
                                    });
                                }
                            } else {
                                setChapItem(item);
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
                                item.isPay
                                    ? themeNew.colors.primary
                                    : themeNew.colors.grey12
                            }
                            paddingVertical={10}
                            paddingHorizontal={5}>
                            <Text
                                color={
                                    item.isPay
                                        ? themeNew.colors.white
                                        : themeNew.colors.grey6
                                }>
                                {item?.chapterNumber}
                            </Text>
                        </Block>
                    </TouchableOpacity>
                ))}
            </Block>

            <Modal style={styles.modal} visible={showModal}>
                <Block flex={1} backgroundColor={themeNew.colors.background} style={styles.modalBackGround}>
                    <Block backgroundColor={themeNew.colors.white} style={styles.modalContainer}>
                        <Block style={styles.clone}>
                            <Fontisto
                                name={'close-a'}
                                size={12}
                                color={'black'}
                                onPress={() => {
                                    setVisible(false);
                                }}
                            />
                        </Block>
                    </Block>
                </Block>
                <Block alignCenter={'center'}>
                    <Text style={styles.textOTP} center>
                        {t('buyToSeeBook')}
                    </Text>
                    <Text size={18} center>
                        {t('chapTer')} {chapItem?.chapterNumber}
                    </Text>
                    <TouchableOpacity
                        style={styles.buttomAddCart}
                        onPress={() => addCart(chapItem)}>
                        <Text style={styles.textButtomLogin} height={55}>
                            {t('addToCart')}
                        </Text>
                    </TouchableOpacity>
                </Block>
            </Modal>
        </Block>
    );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
    modal: {
        height: '50%',
        backgroundColor: colors.blue
    },
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
        backgroundColor: colors.primary,
    },
    clone: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    textOTP: {
        marginTop: 20,
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 20,
    },
    modalContainer: {
        width: '75%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        borderColor: 'black',
    },
    modalBackGround: {
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
}));

export default withNamespaces()(ChapterBook);
