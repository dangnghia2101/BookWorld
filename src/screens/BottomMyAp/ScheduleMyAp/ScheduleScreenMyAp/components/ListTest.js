import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '@redux/actions';
import ItemSchedule from './ItemSchedule';
import SelectTime from '../../components/SelectTime';
import {theme} from '@theme';
import {Text} from '@components';
import {SHOW, HIDE} from '@redux/actions/HandlerLoading';

const dataSlot = [
  '7 ngày tới',
  '30 ngày tới',
  '90 ngày tới',
  '7 ngày trước',
  '30 ngày trước',
  '90 ngày trước',
];

function ListTest() {
  const {colors} = theme;
  const dispatch = useDispatch();

  const {isLoading, data} = useSelector(state => state.listTestSchedule);

  isLoading === false ? dispatch({type: HIDE}) : null;

  const [day, setDay] = useState(7);
  const [timeDay, setTimeDay] = useState(dataSlot[0]);

  useEffect(() => {
    dispatch({
      type: Actions.FETCH_TEST_SCHEDULE,
      day: day,
    });
    dispatch({type: SHOW});
  }, [dispatch, day]);

  const valueSelect = useCallback(value => {
    setTimeDay(value);
    switch (value) {
      case '7 ngày tới':
        setDay(7);
        break;
      case '30 ngày tới':
        setDay(30);
        break;
      case '90 ngày tới':
        setDay(90);
        break;
      case '7 ngày trước':
        setDay(-7);
        break;
      case '30 ngày trước':
        setDay(-30);
        break;
      case '90 ngày trước':
        setDay(-90);
        break;
      default:
        setDay(7);
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <SelectTime
        dataSlot={dataSlot}
        defaultValue={timeDay}
        value={valueSelect}
      />
      {data?.length > 0 ? (
        <ScrollView
          style={styles.ScrollView}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}>
          <View style={styles.ScrollView}>
            {data.map((schedule, index) => (
              <ItemSchedule key={index} schedule={schedule} />
            ))}
          </View>
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
    flex: 1,
    marginTop: 15,
    marginBottom: 20,
  },
  ScrollView: {
    marginTop: 5,
  },
  container_emty_data: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ListTest;
