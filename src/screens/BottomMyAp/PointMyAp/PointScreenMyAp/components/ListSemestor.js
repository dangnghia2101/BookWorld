import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Text} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '@redux/actions';
import ItemSemestor from './ItemSemestor';
import {routes} from '@navigation/routes';
import {theme} from '@theme';
import {SHOW, HIDE} from '@redux/actions/HandlerLoading';

import SelectTime from '../../components/SelectTime';

function ListSemestor() {
  const dispatch = useDispatch();
  const {colors} = theme;
  const navigation = useNavigation();

  dispatch({type: SHOW});
  const dataSlot1 = useSelector(state => state.listAllDetailSemester);
  const dataPoints = useSelector(state => state.listPointSemester);

  dataPoints.isLoading === false ? dispatch({type: HIDE}) : null;

  const formatData = dataSlot1.data?.map(item => item.term_name);
  const [semestor, setSemestor] = useState('');

  const get_id_semester = name => {
    try {
      return dataSlot1?.data?.find(item => item.term_name === name).id;
    } catch (error) {
      return '';
    }
  };

  useLayoutEffect(() => {
    if (formatData?.length > 0) {
      setSemestor(formatData[0]);
      dispatch({
        type: Actions.FETCH_POINT_SEMESTER,
        _id: get_id_semester(semestor),
      });
    }
  }, [dataSlot1]);

  // Get all list data semestor
  useEffect(() => {
    dispatch({
      type: Actions.FETCH_ALL_DETAIL_SEMESTER,
    });
  }, []);

  // Get list point semestor
  useEffect(() => {
    dispatch({
      type: Actions.FETCH_POINT_SEMESTER,
      _id: get_id_semester(semestor),
    });
    dispatch({type: SHOW});
  }, [dispatch, semestor]);

  return (
    <View style={styles.container}>
      {dataSlot1.data && (
        <SelectTime
          dataSlot={formatData}
          defaultValue={semestor}
          value={setSemestor}
        />
      )}

      {dataPoints?.data?.length > 0 && dataSlot1.data ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollView}
          keyboardShouldPersistTaps="always">
          {dataPoints?.data?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate(
                  routes.DETAIL_POINT_SEMESTOR_SCREEN_MY_APP,
                  {
                    id: item.id,
                    headerTitle:
                      item.subject_name +
                      '(' +
                      item.subject_code +
                      ') - ' +
                      item.group_name,
                    grades: item.grades,
                    mediumScore: item.medium_score,
                    statusName: item.status_name,
                  },
                )
              }>
              <ItemSemestor attendance={true} content={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.container_emty_data}>
          <Text color={colors.lightGray}>Không tìm thấy dòng nào phù hợp</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
  },
  ScrollView: {
    marginTop: 15,
  },
  container_emty_data: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ListSemestor;
