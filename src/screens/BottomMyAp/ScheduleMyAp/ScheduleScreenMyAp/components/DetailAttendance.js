import React from 'react';
import {Dimensions} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import TableSheetAttendance from './TableSheetAttendance';
import TopBar from '../../components/TopBar';
// import {columnAttendance} from '../../components/TableSheet/columns';

const windowWidth = Dimensions.get('window').width;

const detail = {
  buoi: '1',
  date: '10/11/2022 - Tuesday',
  shift: '3',
  status: 'Present',
  total_to_now: 6,
  total_absent: 2,
  total_session: 27,
  activities: '2',
};

const attendances = [
  {
    lesson: '1',
    date: '21/01/2022',
    shift: '3',
    status: 'Present',
    total_absent: 2,
    total_to_now: 6,
    total_session: 16,
  },
  {
    lesson: '2',
    date: '21/01/2022',
    shift: '2',
    status: 'Present',
    total_absent: 2,
    total_to_now: 6,
    total_session: 16,
  },
  {
    lesson: '3',
    date: '21/01/2022',
    shift: '4',
    status: 'Absent',
    total_absent: 2,
    total_to_now: 6,
    total_session: 16,
  },
];

const columns = [
  {
    Header: 'Buổi',
    accessor: 'lesson', // accessor is the "key" in the data
    width: windowWidth * 0.15,
  },
  {
    Header: 'Ngày học',
    accessor: 'date',
    width: windowWidth * 0.4,
  },
  {
    Header: 'Ca',
    accessor: 'shift',
    width: windowWidth * 0.15,
  },
  {
    Header: 'Trạng thấi',
    accessor: 'status',
    width: windowWidth * 0.25,
  },
];

export default function DetailAttendance({route}) {
  const {headerTitle} = route.params;
  // const {attendances} = useSelector(state => state.attendances);
  // const data = attendances
  //   .filter(item => item.subject_id === id)
  //   .map((item, index) => {
  //     return (
  //       <TableSheet
  //         item={item.activities}
  //         absent={item.total_absent}
  //         now={item.total_to_now}
  //         session={item.total_session}
  //         key={index}
  //         column={columnAttendance}
  //         getCellProps={cellInfo => {
  //           switch (cellInfo.value) {
  //             case 'Absent':
  //               return 'red';
  //               break;
  //             case 'Present':
  //               return 'green';
  //               break;
  //             default:
  //               break;
  //           }
  //         }}
  //       />
  //     );
  //   });
  return (
    <>
      <TopBar headerTitle={headerTitle} />
      <TableSheetAttendance
        item={attendances}
        column={columns}
        absent={detail.total_absent}
        now={detail.total_to_now}
        session={detail.total_session}
        getCellProps={cellInfo => {
          switch (cellInfo.value) {
            case 'Absent':
              return 'red';
            case 'Present':
              return 'green';
            default:
              break;
          }
        }}
      />
    </>
  );
}
