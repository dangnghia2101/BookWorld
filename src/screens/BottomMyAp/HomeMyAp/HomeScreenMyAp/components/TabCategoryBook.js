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

  useEffect(() => {
    dispatch({type: actions.GET_ALL_AUTHOR});
  }, []);

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
        _id: '12',
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
        _id: '21',
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
        _id: '12',
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
        _id: '12',
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
        _id: '21',
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
        _id: '12',
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
          item._id === dataListCate?.book[1]?.categoryId
            ? dataListCate.book
            : [],
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

  const height =
    dataListCate?.book?.length > 0
      ? (dataListCate?.book?.length + 1) * 140
      : 20;

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={({route}) => {
        return <TabSceneCategoryBook route={route} />;
      }}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      style={{height: height}}
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
