import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '@theme';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ListAttendance from './ListAttendance';
import ListTest from './ListTest';
import ListSchedule from './ListSchedule';

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  LichHoc: ListSchedule,
  LichThi: ListTest,
  DiemDanh: ListAttendance,
});

const ScheduleContainer = () => {
  const {colors} = theme;
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'LichHoc', title: 'Lịch học'},
    {key: 'LichThi', title: 'Lịch thi'},
    {key: 'DiemDanh', title: 'Điểm danh'},
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
      indicatorStyle={styles.backgroundTabView}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  inactiveColorTabar: {
    backgroundColor: 'white',
  },
  backgroundTabView: {
    backgroundColor: 'white',
  },
});

export default ScheduleContainer;
