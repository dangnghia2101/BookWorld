import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {Block, Text} from '@components';

import {BarChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
const ChartMoreMy = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientTo: '#206cf6',
    backgroundGradientToOpacity: 0.2,
    color: (opacity = 0) => `rgba(3, 131, 250, ${opacity})`,
    //strokeWidth: 2, // optional, default 3
    fillShadowGradientFrom: '#0D7EF9',
    fillShadowGradientTo: '#0D7EF9',
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <Block column justifyCenter>
      <Block
        style={styles.dateContainer}
        row
        justifyContent={'space-between'}
        marginHorizontal={15}
        marginVertical={10}>
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

      <BarChart
        data={data}
        width={screenWidth}
        height={250}
        yAxisLabel="$"
        chartConfig={chartConfig}
      />
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
