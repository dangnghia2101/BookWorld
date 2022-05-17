// import messaging from '@react-native-firebase/messaging';
// import {useNavigation} from '@react-navigation/native';
// import axios from 'axios';
import React from 'react';
import {StyleSheet} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import ItemPointTable from './ItemPointTable';
import {Block, Text} from '@components';
import {theme} from '@theme';
// import { fetchSchedules } from '../../features/scheduleSlide/scheduleSlide';

import BlankScreen from '@screens/Bottom/ProfileMain/InfoScreen/components/BlankScreen';

const {colors} = theme;

// const messgageError =
//   'Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại !';

function ListPointTable(props) {
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
  //     subject_semestor: 1,
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
  //     subject_semestor: 2,
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

  // const FootSummany = () => {
  //   return (
  //     <Block style={styles.box_summary}>
  //       <Text size={18} color={colors.blue}>
  //         Điểm trung bình: 9
  //       </Text>
  //       <Text size={18} color={colors.blue}>
  //         Tín chỉ: 69/97(Đạt/Tổng) - 0 miễn giảm
  //       </Text>
  //       <Text
  //         style={styles.line_top}
  //         marginTop={10}
  //         paddingTop={10}
  //         size={20}
  //         color={colors.blue}
  //         fontType={'bold'}>
  //         Thống kê
  //       </Text>
  //       <Block marginTop={10} style={{borderWidth: 1, borderColor: '#e3e3e3'}}>
  //         <Block flex row paddingVertical={10} paddingHorizontal={5}>
  //           <Text flex fontType={'bold'}>
  //             Tổng môn chưa học
  //           </Text>
  //           <Text flex fontType={'bold'}>
  //             Tổng môn chưa học
  //           </Text>
  //           <Text flex fontType={'bold'}>
  //             Tổng môn chưa học
  //           </Text>
  //           <Text flex fontType={'bold'}>
  //             Tổng môn chưa học
  //           </Text>
  //         </Block>
  //         <Block
  //           row
  //           flex
  //           backgroundColor={'#e3e3e3'}
  //           marginTop={5}
  //           paddingHorizontal={5}
  //           paddingVertical={10}>
  //           <Text flex>9</Text>
  //           <Text flex>9</Text>
  //           <Text flex>9</Text>
  //           <Text flex>9</Text>
  //         </Block>
  //       </Block>
  //     </Block>
  //   );
  // };

  return (
    <>
      <Block style={styles.container}>
        {/* <ScrollView
          style={styles.ScrollView}
          showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl refreshing={loading}/>
          // }
          keyboardShouldPersistTaps="always">
          <Block>
            <Block style={styles.box_header} row>
              <Text flex fontType={'bold'}>
                Kỳ thứ
              </Text>
              <Text flex fontType={'bold'}>
                Kỳ học
              </Text>
              <Text style={styles.flex_2} fontType={'bold'}>
                Môn
              </Text>
            </Block>

            {listTest.map((table, index) => (
              <ItemPointTable key={index} table={table} />
            ))}
            <FootSummany />
          </Block>
        </ScrollView> */}

        <BlankScreen />
      </Block>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
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
  box_summary: {
    borderRadius: 5,
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
    marginTop: 30,
  },
  line_top: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  container_emty_data: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginTop: 20,
  },
});

export default ListPointTable;
