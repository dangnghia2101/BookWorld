import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Block, Text } from '@components';
import { theme } from '@theme';

const TabSceneReadingStatus = ({ route }) => {
    const _renderItem = ({ item }) => {
        return (
            <Block backgroundColor={theme.colors.red}>
            </Block>
        );
    };

    return route?.bookList?.length > 0 ? (
        <Block>
            <FlatList
                data={route?.bookList}
                keyExtractor={(_, index) => index.toString()}
                renderItem={_renderItem}
                showsVerticalScrollIndicator={false} />
        </Block>
    ) : (
        <Text>Khong co sach</Text>
    );
};

export default TabSceneReadingStatus

const styles = StyleSheet.create({})