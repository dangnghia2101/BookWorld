import { StyleSheet, View, Image, FlatList } from 'react-native'
import React, { useState } from 'react';
import { Block, HeaderWithButton, Text } from '@components';
import { theme } from '@theme';
import ItemNoti from './itemNoti';
import { useAppSelector } from 'hooks';
import { makeStyles, useTheme } from 'themeNew';

const ScreenNotification = () => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const myInfo = useAppSelector(state => state.root.auth);
    // const [dataNoti, setDataNoti] = useState([]);
    // setDataNoti(myInfo.notification)
    let dataNoti = myInfo.notification;
    console.log("dataNotiiiiiiiiiiii", dataNoti);
    return (
        <Block flex backgroundColor={themeNew.colors.text} >
            <HeaderWithButton isBackHeader title={'Thông báo'} />

            {/* <FlatList
                data={dataNoti}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <ItemNoti item={item} />}
            /> */}
            {dataNoti.map((item, index) => (
                <ItemNoti key={index} item={item} />
            ))}

        </Block >
    )
}


export default ScreenNotification;

const styles = StyleSheet.create({

});