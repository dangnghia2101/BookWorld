import React from 'react';
import {StyleSheet} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import {Block, Text} from '@components';
import {theme} from '@theme';

import BlankScreen from '@screens/Bottom/ProfileMain/InfoScreen/components/BlankScreen';

const {colors} = theme;
// import ItemHistory from './ItemHistory';
// import {fetchTest} from '../../features/scheduleSlide/TestSlide';

// const listTest = [
//   {
//     id: '1',
//     user_code: '001',
//     syllabus_plan_description: 'Android Networking',
//     subject_name: 'Android Networking',
//     subject_code: 'MOB403',
//     subject_classname: 'CP16308_3',
//     subject_session: 'Summer 2022',
//     subject_state: 'Passed',
//     sum_class: 19,
//     average: 9.2,
//     syllabus_plan_noi_dung: 'Nội dung',
//     slot: 3,
//     day: '12/05/2022',
//     url_room_online: 'Link học',
//     area_name: 'Tòa P',
//     slot_time: '12/05/2022',
//     room_name: 'R403',
//     activity_leader_login: 'Chann3',
//     timestamp: '12/05/2022',
//   },
//   {
//     id: '2',
//     user_code: '001',
//     syllabus_plan_description: 'Android Networking',
//     subject_name: 'Android Networking',
//     subject_code: 'MOB403',
//     subject_classname: 'CP16308_3',
//     subject_session: 'Summer 2022',
//     subject_state: 'Not passed',
//     sum_class: 19,
//     average: 9.2,
//     syllabus_plan_noi_dung: 'Nội dung',
//     slot: 3,
//     day: '12/05/2022',
//     url_room_online: 'Link học',
//     area_name: 'Tòa P',
//     slot_time: '12/05/2022',
//     room_name: 'R403',
//     activity_leader_login: 'Chann3',
//     timestamp: '12/05/2022',
//   },
// ];

function ListHistory(props) {
  // const {listTest, loading, error} = useSelector(state => state.test);
  // const dispatch = useDispatch();

  // const getApiData = () => {
  //   const optionListTest = {
  //     token: users.token,
  //     campus_code: users.campus_code,
  //     day: day,
  //     user_code: users.user_code,
  //   };
  //   dispatch(fetchTest(optionListTest));
  // };
  // useEffect(() => {
  //   getApiData();
  // }, [users, day]);

  // const _onRefresh = useCallback(() => {
  //   getApiData();
  // }, [getApiData]);

  return (
    // <Block style={styles.container}>
    //   <ScrollView
    //     style={styles.ScrollView}
    //     // refreshControl={
    //     //   <RefreshControl refreshing={loading}/>
    //     // }
    //     keyboardShouldPersistTaps="always"
    //     showsVerticalScrollIndicator={false}>
    //     <Block>
    //       <Block style={styles.box_header} row>
    //         <Text style={styles.flex_2} fontType={'bold'}>
    //           Tên môn
    //         </Text>
    //         <Text flex fontType={'bold'}>
    //           Mã môn
    //         </Text>
    //         <Text flex fontType={'bold'}>
    //           Lớp
    //         </Text>
    //       </Block>

    //       {listTest.map((schedule, index) => (
    //         <ItemHistory key={index} schedule={schedule} />
    //       ))}
    //     </Block>
    //   </ScrollView>
    // </Block>

    <BlankScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  ScrollView: {
    marginTop: 5,
  },
  flex_2: {
    flex: 2,
  },
  box_header: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  container_emty_data: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginTop: 30,
  },
});

export default ListHistory;
