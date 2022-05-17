import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Dimensions,
  NativeModules,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {Block} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import ContentOption from '@components/Schedule/ContentOption';
import HeaderScheduleMyAp from '@screens/BottomMyAp/ScheduleMyAp/components/HeaderScheduleMyAp';
import {ScrollView} from 'react-native-gesture-handler';
import actions from '@redux/actions';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {theme} from '@theme';
import {SHOW} from '@redux/actions/HandlerLoading';

const initialLayout = {width: Dimensions.get('window').width};

const HomeScreenMyAp = _props => {
  const {colors} = theme;
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const {data, loading} = useSelector(state => state.getListPost);
  const [index, setIndex] = React.useState(0);
  const [option, setOption] = useState(1);
  const getApiData = useCallback(() => {
    const optionPost = {
      type: option,
      page: 1,
    };
    dispatch({type: SHOW});
    dispatch({type: actions.LIST_POSTS, optionPost});
  }, [option]);
  useEffect(() => {
    getApiData();
  }, [getApiData]);
  const _onRefresh = useCallback(() => {
    getApiData();
  }, [getApiData]);
  const study = () => (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={_onRefresh} />
        }>
        <TouchableOpacity activeOpacity={1} style={styles.container}>
          {data?.map((item, index) => (
            <ContentOption keyIndex="schedule" content={item} key={index} />
          ))}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
  const renderScene = SceneMap({
    study: study,
    action: study,
    tuition: study,
  });
  const [routes] = React.useState([
    {key: 'study', title: 'Học tập'},
    {key: 'action', title: 'Hoạt động'},
    {key: 'tuition', title: 'Học phí'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={colors.orange}
      inactiveColor={colors.orange}
      style={styles.inactiveColorTabar}
      onTabPress={setOption(index + 1)}
    />
  );
  return (
    <Block flex>
      <HeaderScheduleMyAp data={login.data?.user} action={setIsVisibleModal} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        indicatorStyle={{backgroundColor: 'white'}}
        renderTabBar={renderTabBar}
      />
    </Block>
  );
};

HomeScreenMyAp.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  inactiveColorTabar: {
    backgroundColor: 'white',
  },
});

export default HomeScreenMyAp;
