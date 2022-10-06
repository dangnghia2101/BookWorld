import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {Block, Text} from '@components';

import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
const screenWidth = Dimensions.get('window').width;

import {makeStyles, useTheme} from 'themeNew';
import {withNamespaces} from 'react-i18next';
import {useAppSelector, useAppDispatch} from '@hooks';

const ChartPurchase = props => {
  const {t} = props;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);
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
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]}>
          <Text color={themeNew.colors.textDark}>{t('day')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]}>
          <Text color={themeNew.colors.textDark}>{t('month')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]}>
          <Text color={themeNew.colors.textDark}>{t('year')}</Text>
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

export default withNamespaces()(ChartPurchase);

const useStyle = makeStyles()(({colors}) => ({
  shadowColor: {
    shadowColor: colors.shadowDark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  itemChartContainer: {
    width: 118,
    height: 32,
    backgroundColor: colors.backgroundDark2,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
