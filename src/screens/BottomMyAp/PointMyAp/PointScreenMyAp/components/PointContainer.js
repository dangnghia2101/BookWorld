import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ListSemestor from './ListSemestor';
import ListHistory from './ListHistory';
import ListPointTable from './ListPointTable';

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  KyHoc: ListSemestor,
  LichSu: ListHistory,
  BangDiem: ListPointTable,
});

const PointContainer = () => {
  const {colors} = theme;
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'KyHoc', title: 'Kỳ học'},
    {key: 'LichSu', title: 'Lịch sử'},
    {key: 'BangDiem', title: 'Bảng điểm'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={colors.orange}
      inactiveColor={colors.orange}
      style={styles.inactiveColorTabar}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      indicatorStyle={styles.bgWhite}
      renderTabBar={renderTabBar}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  scene: {
    flex: 1,
  },
  inactiveColorTabar: {
    backgroundColor: 'white',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
});

PointContainer.propTypes = {
  colums: PropTypes.array,
};

export default PointContainer;
