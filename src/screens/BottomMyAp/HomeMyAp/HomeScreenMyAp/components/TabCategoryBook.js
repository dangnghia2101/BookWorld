import { Block, Text } from '@components';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import TabSceneCategoryBook from './TabSceneCategoryBook';
import { useAppSelector } from 'hooks';
import { useGetAllBookByCategoryQuery } from '@redux/servicesNew';
import { makeStyles, useTheme } from 'themeNew';

const TabCategoryBook = () => {
  const [routes, setRoutes] = useState([{ key: 'Default', title: 'Default' }]);
  const [index, setIndex] = useState(0);

  const allCategories = useAppSelector(state => state.root.book.categoryList);
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);
  const styles = useStyle(themeStore);

  useEffect(() => {
    if (routes.length === 1) {
      setRoutes(formatRouter(allCategories));
    }
  }, [allCategories, routes]);

  //Cập nhật mỗi lần thay đổi TabView
  useGetAllBookByCategoryQuery(routes[index]?._id);

  const formatRouter = data => {
    return data?.map(item => {
      return {
        key: item._id,
        title: item.name,
        ...item,
      };
    });
  };

  const _renderLabel = ({ route, focused, color }) => {
    return (
      <Block>
        <Text color={focused ? theme.colors.primary : theme.colors.grey10}>
          {route.title}
        </Text>
      </Block>
    );
  };

  const renderTabBar = props => {
    return (
      <>
        {allCategories && (
          <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            renderLabel={_renderLabel}
            tabStyle={styles.tabStyle}
            pressColor={theme.colors.white}
            scrollEnabled={true}
            labelStyle={{ color: 'red' }}
            style={{
              backgroundColor: theme.colors.text,
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
    />
  );
};

export default TabCategoryBook;

const useStyle = makeStyles()(({ colors }) => ({
  indicatorStyle: {
    backgroundColor: colors.dark,
  },
  tabStyle: { width: 'auto' },
}));
