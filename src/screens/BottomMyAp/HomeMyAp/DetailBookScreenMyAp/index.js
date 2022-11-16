import { Block, HeaderWithButton, Icon } from '@components';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/core';
import { useGetAllChapterBookMutation } from '@redux/servicesNew';
import { theme } from '@theme';
import { makeStyles, useTheme } from 'themeNew';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ChapterBook from './components/ChapterBook';
import ImageBook from './components/ImageBook';
import IntroduceText from './components/IntroduceText';
import IconView from '@components/Icon';
import { saveFavoriteBookReducer } from '@redux/reducerNew';
import { useAppDispatch } from '@hooks';

const DetailBookScreenMyAp = ({ route }) => {
    const { bookmark, item, _isRead } = route.params;
    const [listChapters, setListChapters] = useState([]);
    const [isRead, setIsRead] = useState(_isRead || true);
    const navigation = useNavigation();

    const myInfo = useAppSelector(state => state.root.auth);

    const [getAllChapterBook] = useGetAllChapterBookMutation();

    useEffect(() => {
        async function fetchAPI() {
            if (item._id) {
                const params = {
                    id: item._id,
                    token: myInfo.token,
                };
                const data = await getAllChapterBook(params);
                setListChapters(data.data);
            }
        }
        fetchAPI();
    }, [getAllChapterBook, item._id, myInfo._id]);

    const favoriteIcon = () => {
        return (
            <TouchableOpacity
                onPress={() => disPatch(saveFavoriteBookReducer(item))}>
                <Block justifyCenter width={50} paddingVertical={2}>
                    <IconView
                        component={'AntDesign'}
                        name={'hearto'}
                        size={25}
                        color={theme.colors.textInBox}
                    />
                </Block>
            </TouchableOpacity>
        );
    };
    return (
        <Block>
            <HeaderWithButton isBackHeader rightIcon={favoriteIcon()} />

            <ScrollView
                style={{ height: '100%' }}
                showsVerticalScrollIndicator={false}>
                <Block
                    flex
                    paddingHorizontal={20}
                    backgroundColor={theme.colors.white}>
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
        </Block>
    );
};

const styles = StyleSheet.create({
    animation: {
        width: 100,
        height: 100,
    },
});

export default DetailBookScreenMyAp;
