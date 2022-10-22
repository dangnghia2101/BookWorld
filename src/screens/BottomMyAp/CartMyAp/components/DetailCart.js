import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Pressable,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Block, Text } from '@components';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailCart = () => {
    const navigation = useNavigation();

    return (
        <Block marginTop={35}>
            <Block style={styles.hd} row alignCenter={'center'}>
                <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                        name={'chevron-left'}
                        size={30}
                        color={'black'}
                    />
                </TouchableOpacity>
                <Block marginLeft={100}>
                    <Text size={18} center>
                        {' '}
                        Thanh toán
                    </Text>
                </Block>
            </Block>
            <ScrollView style={styles.scroll}>
                <Block marginTop={20} row>
                    <Block marginLeft={15}>
                        <Image
                            style={styles.image}
                            source={require('../../../../assets/images/Logo.png')}
                        />
                    </Block>
                    <Block marginLeft={10} column>
                        <Text>đây là tên</Text>
                        <Text>đây là tên</Text>
                        <Text>đây là tên</Text>
                    </Block>
                </Block>

                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
                <Text>đây là tên</Text>
            </ScrollView>
            <Block style={styles.Pay}>
                <TouchableOpacity style={styles.Bottom}>
                    <Text style={styles.textBottom}>Xác nhận</Text>
                </TouchableOpacity>
            </Block>
        </Block>
    );
};

export default DetailCart;

const styles = StyleSheet.create({
    Pay: {
        alignItems: 'flex-end',
        paddingRight: 5,
        backgroundColor: 'white',
        marginTop: 10,
    },
    scroll: {
        height: '86.5%',
        backgroundColor: 'white',
    },
    hd: {},
    textBottom: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    Bottom: {
        height: 50,
        width: '30%',
        backgroundColor: '#D45555',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    chap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    FlatList: {
        height: '45%',
    },
    ItemCart: {
        width: '27%',
        backgroundColor: '#CDCDCD',
        marginTop: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 2,
    },
    Name: {
        fontWeight: '700',
        lineHeight: 30,
    },
    Price: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D45555',
    },
    Container: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    image: {
        width: 120,
        height: 145,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
    },
});
