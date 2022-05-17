import React from 'react';
import {
  // RefreshControl,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import ItemAttendance from './ItemAttendance';
// import {fetchAttendace} from '../../features/scheduleSlide/AttendanceSlide';
import {useTheme} from '@react-navigation/native';
import BlankScreen from '@screens/Bottom/ProfileMain/InfoScreen/components/BlankScreen';

// import SelectTime from '../../components/SelectTime';

// const attendances = [
//   {
//     id: '1',
//     user_code: '001',
//     syllabus_plan_description: 'Android Networking',
//     subject_name: 'Android Networking',
//     subject_code: 'MOB403',
//     subject_id: '11',
//     syllabus_plan_noi_dung: 'Nội dung',
//     slot: 3,
//     day: '12/05/2022',
//     url_room_online: 'Link học',
//     area_name: 'Tòa P',
//     slot_time: '12/05/2022',
//     room_name: 'R403',
//     activity_leader_login: 'Chann3',
//     timestamp: '12/05/2022',
//     total_absent: 2,
//     total_to_now: 6,
//     total_session: 12,
//   },
//   {
//     id: '2',
//     user_code: '001',
//     syllabus_plan_description: 'Android Networking',
//     subject_name: 'Android Networking',
//     subject_code: 'MOB403',
//     subject_id: '21',
//     syllabus_plan_noi_dung: 'Nội dung',
//     slot: 3,
//     day: '12/05/2022',
//     url_room_online: 'Link học',
//     area_name: 'Tòa P',
//     slot_time: '12/05/2022',
//     room_name: 'R403',
//     activity_leader_login: 'Chann3',
//     timestamp: '12/05/2022',
//     total_absent: 1,
//     total_to_now: 6,
//     total_session: 12,
//   },
// ];

function ListAttendance(props) {
  // const dispatch = useDispatch();
  const {colors} = useTheme();
  // const {attendances, loading} = useSelector(state => state.attendances);
  // const {users} = useSelector(state => state.auths);
  // const getApiData = useCallback(() => {
  //   dispatch(fetchAttendace(users));
  // }, [users]);

  // useEffect(() => {
  //   getApiData();
  // }, []);

  // const _onRefresh = useCallback(() => {
  //   getApiData();
  // }, [getApiData]);
  return (
    <ScrollView
      // refreshControl={
      //   <RefreshControl refreshing={loading}/>
      // }
      contentContainerStyle={styles.scrollFlex}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}>
      {/* <View style={[styles.container, {color: colors.text}]}>
        {attendances &&
          Array.isArray(attendances) &&
          attendances.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate(routes.DETAIL_ATTENDANCE_SCREEN_MY_AP, {
                  id: item.subject_id,
                  headerTitle: item.subject_name + ' - ' + item.subject_code,
                })
              }>
              <ItemAttendance attendance={true} content={item} />
            </TouchableOpacity>
          ))}
      </View> */}
      <BlankScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  content: {
    marginTop: 30,
  },
  container_emty_data: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollFlex: {
    flex: 1,
  },
});

export default ListAttendance;
