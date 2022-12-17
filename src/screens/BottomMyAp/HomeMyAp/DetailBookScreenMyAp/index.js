import { Block, Container, HeaderWithButton, Icon } from '@components';
import {
    useAppDispatch,
    useAppSelector,
    useCountDown,
    useDebounce,
} from '@hooks';
import { useNavigation } from '@react-navigation/core';
import { changeTimeReducer } from '@redux/reducerNew';
import { timereadAPI, useGetAllChapterBookMutation } from '@redux/servicesNew';
import { theme } from '@theme';
import { makeStyles, useTheme } from 'themeNew';
import { CountUpTime } from '@utils/helper';
import CricleProgress from 'common/CircleProgress';
import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import ChapterBook from './components/ChapterBook';
import ImageBook from './components/ImageBook';
import IntroduceText from './components/IntroduceText';
import IconView from '@components/Icon';
import { usePostSaveFavoriteBooksMutation } from '@redux/servicesNew';

const DetailBookScreenMyAp = ({ route }) => {
    const { bookmark, item, _isRead } = route.params;
    const [listChapters, setListChapters] = useState([]);
    const [isRead, setIsRead] = useState(_isRead || true);
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [saveFavoriteBook] = usePostSaveFavoriteBooksMutation();
    const { progressInDay, target } = useAppSelector(
        state => state.root.reading,
    );
    const time = useCountDown(progressInDay, 100);

    useEffect(() => {
        dispatch(changeTimeReducer(time));
    }, [time]);

    // useEffect(() => {
    //     if (progressInDay && target) {
    //         const time = useCountdown(1, 15);
    //         console.log('===> time ', time);
    //     }
    // }, [target]);

    const myInfo = useAppSelector(state => state.root.auth);

    const [getAllChapterBook] = useGetAllChapterBookMutation();

    useEffect(() => {
        async function fetchAPI() {
            if (item._id) {
                const params = {
                    id: item._id,
                    token: myInfo.token,
                };
                const { data } = await getAllChapterBook(params);
                setListChapters(data);
            }
        }
        fetchAPI();
    }, [getAllChapterBook, item._id, myInfo._id]);

    const handleSaveFavoriteBook = async () => {
        try {
            const body = { id: myInfo._id, idBook: item };
            await saveFavoriteBook(body);
            ToastAndroid.show('Đã thêm vào sách yêu thích', ToastAndroid.SHORT);
        } catch (error) {
            ToastAndroid.show(error, ToastAndroid.SHORT);
        }
    };

    // useEffect(() => {
    //     if (progressInDay && target) {
    //         const time = useCountdown(1, 15);
    //         console.log('===> time ', time);
    //     }
    // }, [target]);

    const favoriteIcon = () => {
        return (
            <TouchableOpacity onPress={handleSaveFavoriteBook}>
                <Block
                    style={styles.iconFavorite}
                    justifyCenter
                    width={50}
                    paddingVertical={2}>
                    <IconView
                        component={'AntDesign'}
                        name={'hearto'}
                        size={25}
                        color={themeNew.colors.textInBox}
                    />
                </Block>
            </TouchableOpacity>
        );
    };

    return (
        <Container
            statusColor={themeNew.colors.background}
            edges={['left', 'right']}>
            <HeaderWithButton isBackHeader rightIcon={favoriteIcon()} />
            <ScrollView
                style={{ height: '100%' }}
                showsVerticalScrollIndicator={false}>
                <Block
                    flex
                    paddingHorizontal={20}
                    backgroundColor={themeNew.colors.background}>
                    <ImageBook item={route.params} />
                    <IntroduceText item={route.params} />
                    <ChapterBook
                        infoBook={item}
                        detailBook={listChapters}
                        nameBook={route.params.item.name}
                        isRead={isRead}
                        setIsRead={setIsRead}
                        navigation={navigation}
                    />
                </Block>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    animation: {
        width: 100,
        height: 100,
    },
    iconFavorite: {
        marginLeft: '100%',
    },
});

export default DetailBookScreenMyAp;
