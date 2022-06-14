import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {color} from 'react-native-reanimated';
import {TabBar, TabView} from 'react-native-tab-view';
import TabSceneCategoryBook from './TabSceneCategoryBook';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';

const _renderLabel = ({route, focused, color}) => {
  return (
    <Block>
      <Text color={focused ? theme.colors.black : theme.colors.lightGray}>
        {route.title}
      </Text>
    </Block>
  );
};

const TabCategoryBook = () => {
  const [routes, setRoutes] = useState([{key: 'Default', title: 'Default'}]);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const listCategoryBook = useSelector(state => state.getAllCategory);

  useEffect(() => {
    dispatch({type: actions.GET_ALL_AUTHOR});
    dispatch({type: actions.GET_ALL_CATEGORY});
    if (listCategoryBook) {
      setRoutes(formatRouter(listCategoryBook.data));
    }
  }, []);

  const formatRouter = data => {
    return data?.map(item => {
      return {
        key: item._id,
        title: item.name,
        // bookList:
        //   item._id === dataListCate?.book[1]?.categoryId
        //     ? dataListCate.book
        //     : [],
        ...item,
      };
    });
  };

  const renderTabBar = props => {
    return (
      <>
        {!listCategoryBook.isLoading && (
          <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            renderLabel={_renderLabel}
            tabStyle={styles.tabStyle}
            pressColor={theme.colors.white}
            scrollEnabled={true}
            labelStyle={{color: 'red'}}
            style={{
              backgroundColor: theme.colors.white,
            }}
          />
        )}
      </>
    );
  };

  // const height =
  //   dataListCate?.book?.length > 0
  //     ? (dataListCate?.book?.length + 1) * 140
  //     : 20;

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={({route}) => {
        return <TabSceneCategoryBook route={route} />;
      }}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      // style={{height: height}}
    />
  );
};

export default TabCategoryBook;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: theme.colors.dark,
  },
  tabStyle: {width: 'auto'},
});
