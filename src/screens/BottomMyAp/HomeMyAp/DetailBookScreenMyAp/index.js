import { Block, HeaderWithButton } from '@components';
import { useAppSelector } from '@hooks';
import { useGetAllChapterBookMutation } from '@redux/servicesNew';
import { theme } from '@theme';
import Topbar from 'common/Topbar';
import { makeStyles, useTheme } from 'themeNew';
import { useAppSelector } from '@hooks';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import ChapterBook from './components/ChapterBook';
import ImageBook from './components/ImageBook';
import IntroduceText from './components/IntroduceText';
// const detailBook = {
//   name: 'Đầu sách',
//   evaluateBook: 3.4,
//   introduce: 'Gioi thieu sach',
//   chapter: [
//     {
//       id: 1,
//       name: 1,
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 2,
//       name: 2,
//       content: 'Noi dung chuong 2',
//     },
//     {
//       id: 3,
//       name: 'Chuong 1',
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 4,
//       name: 'Chuong 2',
//       content: 'Noi dung chuong 2',
//     },
//     {
//       id: 5,
//       name: 'Chuong 1',
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 6,
//       name: 'Chuong 2',
//       content: 'Noi dung chuong 2',
//     },
//     {
//       id: 7,
//       name: 'Chuong 1',
//       content: 'Noi dung chuong 1',
//     },
//     {
//       id: 8,
//       name: 'Chuong 2',
//       content: 'Noi dung chuong 2',
//     },
//   ],
// };

const DetailBookScreenMyAp = ({ route }) => {
    const { bookmark, item, _isRead } = route.params;
    const [listChapters, setListChapters] = useState([]);
    const [isRead, setIsRead] = useState(_isRead || true);
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const myInfo = useAppSelector(state => state.root.auth);


    const [getAllChapterBook] = useGetAllChapterBookMutation();

    useEffect(() => {
        async function fetchAPI() {
            if (item._id) {
                const params = [
                    {
                        id: item._id,
                    },
                    { token: myInfo.token },
                ];
                const data = await getAllChapterBook(params);
                setListChapters(data.data);
            }
        }
        fetchAPI();
    }, [getAllChapterBook, item._id, myInfo._id]);

    return (
        <Block>
            <HeaderWithButton isBackHeader />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Block flex paddingHorizontal={20} backgroundColor={themeNew.colors.text} />
                <Topbar bookmark={bookmark} />
                <Block
                    flex
                    paddingHorizontal={20}
                    backgroundColor={theme.colors.white}>

                    <ImageBook item={route.params} />
                    <IntroduceText item={route.params} />
                    <ChapterBook
                        detailBook={listChapters}
                        nameBook={route.params.item.name}
                        isRead={isRead}
                        setIsRead={setIsRead}
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
