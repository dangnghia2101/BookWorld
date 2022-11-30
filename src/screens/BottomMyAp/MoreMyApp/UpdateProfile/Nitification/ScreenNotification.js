import { StyleSheet, View, Image, FlatList, ScrollView } from 'react-native';
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
    console.log('dataNotiiiiiiiiiiii', dataNoti);
    return (
        <Block flex backgroundColor={themeNew.colors.grey16}>
            <HeaderWithButton isBackHeader title={'Thông báo'} />
            <ScrollView>
                {dataNoti.map((item, index) => (
                    <ItemNoti key={index} item={item} />
                ))}
            </ScrollView>
        </Block>
    );
};

export default ScreenNotification;

const styles = StyleSheet.create({});
