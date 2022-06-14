import { Block, Text } from '@components';
import React, { useState, useEffect } from 'react';
import { theme } from '@theme';
import { StyleSheet } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import TabSceneReadingStatus from './TabSceneReadingStatus';
import TapScenceAuthor from './TapScenceAuthor';

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
    author: [
      {
        _id: '629dd177bcf9cb66adbc1f0f',
        name: 'Hoang Cong Nhut Vy',
        email: 'vyhcn30122002@gmail.com',
        phone: ' ',
        permission: 'author',
        fcmtokens: [
          'eHpsj0dIRiq3rm5_tF_Fuk:APA91bGu739hH-XQlLCwHOBYetppOMHOobsqzJCI1Qtr8rywAdvxIdBI3fvwyxaPjtl-l_5UyaWzjBdWKjvH0H1ioADxSLa2eBCRpVe0R-2hYowzyU9MlZIurtbzVA1P-0cnynKnG6cA',
        ],
        image:
          'https://lh3.googleusercontent.com/a-/AOh14GghFTyYewt_hwtFEf4nmlCFJKkBK_VNqKf3pwtq=s96-c',
        bookmark: '',
        wallet: 0,
        favoritebooks: '',
        updatedAt: '2022-06-06T10:05:43.792Z',
        createdAt: '2022-06-06T10:05:43.792Z',
        historyBookRead: [],
      },
      {
        _id: '629dbb014d8f618349fb2b6c',
        name: 'Nghĩa Đặng',
        email: 'dangnghia2101@gmail.com',
        phone: ' ',
        permission: 'author',
        fcmtokens: [],
        image:
          'https://lh3.googleusercontent.com/a-/AOh14Ggu9h8fvg5sbFYYaxz6AK4De7MDeFeRm0QjPEzwhw=s96-c',
        bookmark: '',
        wallet: 0,
        favoritebooks: '',
        updatedAt: '2022-06-06T08:29:53.599Z',
        createdAt: '2022-06-06T08:29:53.599Z',
        historyBookRead: [],
      },
      {
        _id: '629cb55f9dc5b8db2637f4d0',
        name: 'Vỹ Tự Học',
        email: 'phipro14700@gmail.com',
        phone: ' ',
        permission: 'author',
        fcmtokens: [],
        image:
          'https://lh3.googleusercontent.com/a/AATXAJwmpN0F6lH9JQ4fmenOD2o4FjPLIJi7-rTtOXBz=s96-c',
        bookmark: '',
        wallet: 0,
        favoritebooks: '',
        updatedAt: '2022-06-05T13:53:35.290Z',
        createdAt: '2022-06-05T13:53:35.290Z',
        historyBookRead: [],
      },
      {
        _id: '629c988c1cbbb4048b91c773',
        name: 'Vy',
        email: 'hoangvy450@gmail.com',
        phone: ' ',
        permission: 'author',
        fcmtokens: [],
        image:
          'https://lh3.googleusercontent.com/a-/AOh14Gj0dKYUjx5eL6MTiVbnqbB_S67ILjS814PsjZFSdQ=s96-c',
        bookmark: '',
        wallet: 0,
        favoritebooks: '',
        updatedAt: '2022-06-05T11:50:36.794Z',
        createdAt: '2022-06-05T11:50:36.794Z',
        historyBookRead: [],
      },
      {
        _id: '629adbbc230bced981771ef1',
        name: 'Hoang Cong Nhut Vy (FPL HCM_k16)',
        email: 'vyhcnps16752@fpt.edu.vn',
        phone: ' ',
        permission: 'author',
        fcmtokens: [],
        image:
          'https://lh3.googleusercontent.com/a-/AOh14GhxnMewAEdILwUgKyPK2ghWPyQsF1c5vmcc6-wsHw=s96-c',
        bookmark: '',
        wallet: 0,
        favoritebooks: '',
        updatedAt: '2022-06-04T04:12:44.475Z',
        createdAt: '2022-06-04T04:12:44.475Z',
        historyBookRead: [],
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
            : dataListCate.author,
        ...item,
      };
    });
  };
  useEffect(() => {
    setRoutes(formatRouter(dataListCate.data));
  }, []);
  const rednderTabBar = props => {
    return (
      <>
        {!dataListCate.isLoading && (
          <TabBar
            {...props}
            scrollEnabled
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
        return index === 2 ? <TapScenceAuthor route={route} /> : null;
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
