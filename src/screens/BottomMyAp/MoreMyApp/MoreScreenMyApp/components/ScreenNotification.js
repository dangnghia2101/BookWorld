import { StyleSheet, View, Image, FlatList } from 'react-native'
import React from 'react';
import { Block, Text } from '@components';
import { theme } from '@theme';
import { dataNoti } from './dataNoti';
import ItemNoti from './ItemNoti';
import { useAppSelector } from 'hooks';
import { makeStyles, useTheme } from 'themeNew';

const ScreenNotification = () => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    console.log(dataNoti);
    if (dataNoti && dataNoti.length) {
        return (
            <Block flex relative>
                <Block absolute>
                    <Image resizeMode='cover' style={styles.image} resizeMode='cover' source={require('assets/images/Mask.png')} />
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
    return null;
};

export default ScreenNotification;

const styles = StyleSheet.create({

});