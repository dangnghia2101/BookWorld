import { StyleSheet, View, Image, FlatList } from 'react-native'
import React from 'react';
import { Block, Text } from '@components';
import { theme } from '@theme';
import ItemNoti from './itemNoti';
import { useAppSelector } from 'hooks';
import { makeStyles, useTheme } from 'themeNew';
const data = [
    {
        title: 'Đọc sách ở tất cả mọi nơi',
        description:
            'Tủ sách online với hơn 10000 đầu sách nằm gói gọn trong lòng bàn tay của bạn',
        url: 'https://static.vecteezy.com/system/resources/previews/002/902/253/non_2x/online-digital-library-vector.jpg',
        id: 1,
    },

];
const ScreenNotification = () => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);

    return (
        <Block flex relative>
            <Block absolute>
                <Image resizeMode='cover' style={styles.image} source={require('../../../../../assets/images/Mask.png')} />
            </Block>
            <Block alignCenter marginTop={20}>
                <Text color={themeNew.colors.text}
                    size={20}
                    fontType={'bold'}
                >Notification</Text>
            </Block>
            <Block absolute
                top={100}
                width="100%">
                <FlatList
                    data={dataNoti}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <ItemNoti item={item} />}
                />
            </Block>
        </Block >
    )
}


export default ScreenNotification;

const styles = StyleSheet.create({

});