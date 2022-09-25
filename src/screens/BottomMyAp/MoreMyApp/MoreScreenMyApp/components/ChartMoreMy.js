import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {Block, Text} from '@components';

import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
const screenWidth = Dimensions.get('window').width;
const ChartMoreMy = () => {
  const data = [
    {
      month: 'January',
      time: 500,
    },
    {
      month: 'February',
      time: 400,
    },
    {
      month: 'March',
      time: 450,
    },
    {
      month: 'April',
      time: 480,
    },
    {
      month: 'May',
      time: 500,
    },
    {
      month: 'June',
      time: 500,
    },
    {
      month: 'July',
      time: 500,
    },
    {
      month: 'August',
      time: 500,
    },
    {
      month: 'Setember',
      time: 500,
    },
    {
      month: 'October',
      time: 200,
    },
    {
      month: 'November',
      time: 500,
    },
    {
      month: 'December',
      time: 500,
    },
  ];

  const data2 = [
    {
      month: 'January',
      time: 500,
    },
    {
      month: 'February',
      time: 400,
    },
    {
      month: 'March',
      time: 450,
    },
    {
      month: 'April',
      time: 480,
    },
    {
      month: 'May',
      time: 500,
    },
    {
      month: 'June',
      time: 500,
    },
    {
      month: 'July',
      time: 500,
    },
    {
      month: 'August',
      time: 500,
    },
  ];

  return (
    <Block marginVertical={20} column justifyCenter>
      <Block
        style={styles.dateContainer}
        row
        justifyContent={'space-between'}
        marginHorizontal={15}>
        <TouchableOpacity style={styles.itemChartContainer}>
          <Text>Ngày</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemChartContainer}>
          <Text>Tháng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemChartContainer}>
          <Text>Năm</Text>
        </TouchableOpacity>
      </Block>

      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          style={{data: {fill: '#0D7EF9', width: 15}}}
          animate={{
            duration: 3000,
            onLoad: {
              duration: 3000,
            },
          }}
          data={data}
          x="month"
          y="time"
        />
      </VictoryChart>
    </Block>
  );
};

export default ChartMoreMy;

const styles = StyleSheet.create({
  dateContainer: {},
  itemChartContainer: {
    width: 118,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
