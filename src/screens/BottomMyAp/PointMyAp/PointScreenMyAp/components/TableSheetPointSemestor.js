import React, {useMemo} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {useTable} from 'react-table';

import {theme} from '@theme';
import {Text} from '@components';

const {colors, fonts} = theme;
const HEIGHT = Dimensions.get('window').height;

export default function TableSheetPointSemestor({
  average,
  state,
  item,
  column,
  getCellProps,
  mediumScore,
  statusName,
}) {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => item, []);
  const tableIntance = useTable({
    columns,
    data,
  });
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    tableIntance;

  return (
    <>
      <View style={styles.table} {...getTableProps}>
        <View style={styles.header}>
          {headerGroups.map((item, i) =>
            item.headers.map((columzz, index) => (
              <View key={index} style={columzz.styleHeader}>
                <Text
                  style={{
                    minWidth: columzz.minWidth,
                    maxWidth: columzz.maxWidth,
                    width: columzz.width,
                    ...styles.textHeader,
                  }}>
                  {columzz.render('Header')}
                </Text>
              </View>
            )),
          )}
        </View>

        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.mBottom}
          showsVerticalScrollIndicator={false}>
          <View style={styles.mBottom}>
            <View {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <View key={index} style={styles.rowTable}>
                    {row.cells.map(cell => (
                      <View
                        key={index}
                        {...cell.getCellProps([
                          {
                            style: cell.column.styleRow,
                          },
                        ])}>
                        <Text
                          style={{
                            color: getCellProps(cell)
                              ? getCellProps(cell)
                              : 'black',
                            minWidth: cell.column.minWidth,
                            maxWidth: cell.column.maxWidth,
                            width: cell.column.width,
                            marginRight: cell.column.marginRight,
                            ...styles.textData,
                          }}>
                          {cell.render('Cell')}
                        </Text>
                      </View>
                    ))}
                  </View>
                );
              })}
            </View>

            <View style={styles.bottomCell}>
              <View style={styles.borderBotLeft}>
                <Text
                  size={12}
                  fontType={fonts.fontWeight.bold}
                  color={colors.text}>
                  Điểm trung bình:
                  <Text
                    size={12}
                    fontType={fonts.fontWeight.bold}
                    color={colors.red}>
                    {' '}
                    {mediumScore}{' '}
                  </Text>
                </Text>
              </View>
              <View style={styles.borderBotRight}>
                <Text
                  size={12}
                  fontType={fonts.fontWeight.bold}
                  color={colors.text}>
                  Trạng thái:
                  <Text
                    size={12}
                    fontType={fonts.fontWeight.bold}
                    color={
                      statusName === 'Passed'
                        ? colors.green
                        : statusName === 'Not passed'
                        ? colors.red
                        : colors.yellow
                    }>
                    {' '}
                    {statusName}{' '}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
    left: 15,
  },
  table: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    height: HEIGHT,
  },
  header: {
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderLeftColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    height: 45,
    alignItems: 'center',
    left: 0,
  },
  rowTable: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderLeftColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textData: {
    fontSize: 13,
    left: 15,
  },
  bottomCell: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    borderLeftWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderRightWidth: 1,
    backgroundColor: '#F1F1F1',
  },
  borderBotLeft: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  borderBotRight: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  mBottom: {
    marginBottom: 60,
  },
});
