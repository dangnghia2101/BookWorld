import { Block, Text } from '@components';
import React, { useState, useEffect } from 'react';
import { theme } from '@theme';
import { StyleSheet } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import TabSceneReadingStatus from './TabSceneReadingStatus';

const _renderLabel = ({ route, focused, color }) => {
    return (
        <Block>
            <Text color={focused ? theme.colors.dark : theme.colors.lightGray}>
                {route.title}
            </Text>
        </Block>
    );
};

const TapReadingStatus = () => {
    const [routes, setRoutes] = useState([{ key: 'Default', title: 'Default' }]);
    const [index, setIndex] = useState(0);

    const dataListCate = {
        data: [
            {
                _id: 'cate01',
                name: 'Tất cả',
            },
            {
                _id: 'cate02',
                name: 'Đọc sau',
            },
            {
                _id: 'cate03',
                name: 'Đã đọc',
            },
            {
                _id: 'cate04',
                name: 'Sách của vợ',
            },
            {
                _id: 'cate05',
                name: 'Sách của chồng',
            },
            {
                _id: 'cate04',
                name: 'Sách của con',
            },
        ],
        isLoading: false,
    };
    const formatRouter = data => {
        return data?.map(item => {
            return {
                key: item._id,
                title: item.name,
            }
        })
    }
    useEffect(() => {
        setRoutes(formatRouter(dataListCate.data));
    }, []);

    const rednderTabBar = props => {
        return (
            <>
                {!dataListCate.isLoading && (
                    <TabBar {...props}
                        scrollEnabled
                        // indicatorStyle={styles.indicator}
                        renderLabel={_renderLabel}
                        tabStyle={styles.tabStyle}
                        style={{ backgroundColor: theme.colors.white }} />
                )}
            </>
        )
    }
    return (
        <TabView
            lazy
            navigationState={{ index, routes }}
            renderScene={({ route }) => {
                return <TabSceneReadingStatus route={route} />
            }}
            renderTabBar={rednderTabBar}
            onIndexChange={setIndex}
            style={{ height: 500 }}
            backgroundColor={theme.colors.red}
        />
    );
};

export default TapReadingStatus;

const styles = StyleSheet.create({

    tabStyle: { width: 'auto' },
});