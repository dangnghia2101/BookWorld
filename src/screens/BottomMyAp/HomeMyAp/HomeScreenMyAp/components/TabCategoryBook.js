import { Block, Text } from '@components';
import { theme } from '@theme';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import TabSceneCategoryBook from './TabSceneCategoryBook';

const _renderLabel = ({ route, focused, color }) => {
  return (
    <Block>
      <Text color={focused ? theme.colors.dark : theme.colors.lightGray}>
        {route.title}
      </Text>
    </Block>
  );
};

const TabCategoryBook = () => {
  const [routes, setRoutes] = useState([{ key: 'Default', title: 'Default' }]);
  const [index, setIndex] = useState(0);

  const dataListCate = {
    data: [
      {
        _id: 'cate01',
        name: 'Truyen thuyet',
      },
      {
        _id: 'cate02',
        name: 'Tai Chinh',
      },
      {
        _id: 'cate03',
        name: 'Truyen ma',
      },
      {
        _id: 'cate04',
        name: 'Khoa hoc',
      },
      {
        _id: 'cate05',
        name: 'Lap trinh',
      },
    ],
    book: [
      {
        _id: 'cate01',
        categoryId: 'cate01',
        banner:
          'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
        name: 'Rich Dad Poor Dad',
        name_author: 'Robert T.Kiyosaki',
        evalue: '4.5',
        numPage: 234,
        numView: 21000,
      },
      {
        _id: 'cate01',
        categoryId: 'cate01',
        banner:
          'https://uploads-ssl.webflow.com/5ee67a4ca605db1097d0d827/612b5cf9e84a8fb37e685919_Rich-Dad-Poor-Dad-1000x1000.jpg',
        name: 'Rich Dad Poor Dad',
        name_author: 'Robert T.Kiyosaki',
        evalue: '4.5',
        numPage: 234,
        numView: 21000,
      },
    ],
    isLoading: false,
  };

  const formatRouter = data => {
    return data?.map(item => {
      return {
        key: item._id,
        title: item.name,
        bookList:
          item._id === dataListCate?.book[0]?._id ? dataListCate.book : [],
        ...item,
      };
    });
  };

  useEffect(() => {
    setRoutes(formatRouter(dataListCate.data));
  }, []);

  const renderTabBar = props => {
    return (
      <>
        {!dataListCate.isLoading && (
          <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            renderLabel={_renderLabel}
            tabStyle={styles.tabStyle}
            style={{
              backgroundColor: theme.colors.white,
            }}
          />
        )}
      </>
    );
  };

  return (
    <TabView
      lazy
      navigationState={{ index, routes }}
      renderScene={({ route }) => {
        return <TabSceneCategoryBook route={route} />;
      }}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      style={{ height: 500 }}
    />
  );
};

export default TabCategoryBook;

const styles = StyleSheet.create({
  indicatorStyle: {
    opacity: 0,
  },
  tabStyle: { width: 'auto' },
});
