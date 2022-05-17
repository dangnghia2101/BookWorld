import React from 'react';
import {Dimensions} from 'react-native';
import TableSheetPointSemestor from './TableSheetPointSemestor';
import TopBar from '../../components/TopBar';

const windowWidth = Dimensions.get('window').width;

const detail = {
  average: 9.5,
  state: 'Passed',
};

const columns = [
  {
    Header: 'Tên đầu điểm',
    accessor: 'grade_name', // accessor is the "key" in the data
    maxWidth: windowWidth * 0.6,
    minWidth: windowWidth * 0.6,
    width: windowWidth * 0.6,
    marginRight: 10,
  },
  {
    Header: 'Trọng số',
    accessor: 'grade_weight',
    maxWidth: windowWidth * 0.2,
    minWidth: windowWidth * 0.2,
    width: windowWidth * 0.2,
  },
  {
    Header: 'Điểm',
    accessor: 'grade_result',
    maxWidth: windowWidth * 0.2,
    minWidth: windowWidth * 0.15,
    width: windowWidth * 0.15,
  },
];

export default function DetailPointSemestor({route}) {
  const {headerTitle, grades, statusName, mediumScore} = route.params;

  return (
    <>
      <TopBar headerTitle={headerTitle} />
      <TableSheetPointSemestor
        item={grades}
        statusName={statusName}
        mediumScore={mediumScore}
        column={columns}
        average={detail.average}
        state={detail.state}
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
