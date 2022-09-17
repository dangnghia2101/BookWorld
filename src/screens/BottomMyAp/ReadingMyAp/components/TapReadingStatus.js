import { Block, Text } from '@components';
import React, { useState, useEffect } from 'react';
import { theme } from '@theme';
import { StyleSheet } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import TabSceneReadingStatus from './TabSceneReadingStatus';
import TapScenceAuthor from './TapScenceAuthor';
<<<<<<< Updated upstream
import { useSelector, useDispatch } from 'react-redux';
import actions from '@redux/actions';
=======
import { useSelector } from 'react-redux';

>>>>>>> Stashed changes
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
  const dispatch = useDispatch();

  const dataListCate = {
    data: [
      {
        _id: 'cate01',
        name: 'Sách đang đọc',
      },
      {
        _id: 'cate02',
        name: 'Sách yêu thích',
      },
      {
        _id: 'cate03',
        name: 'Tác giả yêu thích',
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
  const listAuthor = useSelector(state => state.getAllAuthor);


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

<<<<<<< Updated upstream
  React.useLayoutEffect(() => {
    dispatch({ type: actions.GET_ALL_AUTHOR, body: routes[index]._id });
  }, [index]);

=======
>>>>>>> Stashed changes
  const rednderTabBar = props => {
    return (
      <>
        {!dataListCate.isLoading && (
          <TabBar
            {...props}
            scrollEnabled={true}
            // indicatorStyle={styles.indicator}
            renderLabel={_renderLabel}
            tabStyle={styles.tabStyle}
            style={{ backgroundColor: theme.colors.white }}
          />
        )}
      </>
    );
  };
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'cate01':
        return index === 0 ? <TabSceneReadingStatus route={route} /> : null;
      case 'cate02':
        return index === 1 ? <TapScenceAuthor /> : null;
      case 'cate03':
        return index === 2 ? <TapScenceAuthor /> : null;
      default:
        return <TabSceneReadingStatus />;
    }
  };
  return (
    <TabView
      lazy
      navigationState={{ index, routes }}
      renderScene={renderScene}
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
