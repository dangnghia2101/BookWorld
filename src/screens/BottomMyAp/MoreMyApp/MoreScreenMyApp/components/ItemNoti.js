import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { Block } from '@components';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import { theme } from '@theme';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

const ItemNoti = ({ item }) => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    console.log(item.avt)
    return (
        <TouchableOpacity>
            <Block
                width="100%"
                row
                paddingHorizontal={20}
                marginTop={20}
            >
                <Block
                    backgroundColor={theme.colors.white}
                    width={65}
                    height={65}
                    radius={50}
                    justifyCenter
                    alignCenter
                    padding={7}
                    borderWidth={4}
                    borderColor={theme.colors.creamRed}>
                    <Image style={styles.avatar} source={{ uri: item.avt }} />
                </Block>
                <Block width={270}>
                    <Text style={styles.content} lineBreakMode='2'>{item.content}</Text>
                    <Text style={styles.time}>{item.time}</Text>
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
        marginLeft: 12
    },
    content: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
        marginLeft: 12

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 40,
        margin: 7,
    },
});