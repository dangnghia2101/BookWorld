import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { Block } from '@components';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@theme';
import { formatDay } from '@utils/helper';

const ItemNoti = ({ item }) => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    console.log("itemmmmmmmmmmm", item)
    return (
        <TouchableOpacity>
            <Block
                width="100%"
                row
                paddingHorizontal={20}
                marginTop={20}
            >
                <Block
                    width={65}
                    height={65}
                    radius={50}
                    justifyCenter
                    alignCenter
                    padding={7}
                    borderWidth={3}
                    borderColor={theme.colors.creamRed}>
                    <Image style={styles.avatar} source={{ uri: item.book.image }} />
                </Block>
                <Block width={270}>
                    <Text style={styles.content} lineBreakMode='2'>{item.content}</Text>
                    <Text style={styles.time}>{formatDay(new Date(item.createdAt))}</Text>
                </Block>
            </Block>
        </TouchableOpacity>
    )
}

export default ItemNoti;

const styles = StyleSheet.create({
    time: {
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 12,
        color: theme.colors.text
    },
    content: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
        marginLeft: 12,
        color: theme.colors.text
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 40,
        margin: 5,
        resizeMode: 'center'
    },
});