import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Block, Text, Button} from '@components';

import Plot from 'react-plotly.js';
const screenWidth = Dimensions.get('window').width;

import {makeStyles, useTheme} from 'themeNew';
import {withNamespaces} from 'react-i18next';
import {useAppSelector, useAppDispatch} from '@hooks';

import { useGetReadTimeBookQuery, useLazyGetReadTimeBookQuery } from '@redux/servicesNew';

const ChartMoreMy = props => {
  const [data, setData] = useState([]);
  const [getReadTimeBook] = useLazyGetReadTimeBookQuery();
  //thuc hien dau goi do getReadTimeBook(id);
  const myInfo = useAppSelector(state => state.root.auth);
  const actions = myInfo._id;
  //console.log("id >>>", actions);
  // data = useGetReadTimeBookQuery(actions);
  //chay 1 lan

  const {t} = props;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);
  
 useEffect(async () => {
  // const dataChart = await getReadTimeBook(actions);
  // setData(dataChart.data)
  console.log("datasever >>");
  // if(data?.data[0]){
  //   const dataChart = await getReadTimeBook(actions);
  //   setData(dataChart.data)
  // console.log(">>", setData(data?.data[0][2022]));
  // //useState
  // }

  // const getDataChart = async () => {
  //   const data2 = await getReadTimeBook(actions);
  //   console.log("datasever >>", data2);
  // }
  // getDataChart();
 }, [])

//  const data2 = getReadTimeBook(actions);

  
  // const data = [
  //   {
  //     month: 'January',
  //     time: 500,
  //   },
  //   {
  //     month: 'February',
  //     time: 400,
  //   },
  //   {
  //     month: 'March',
  //     time: 450,
  //   },
  //   {
  //     month: 'April',
  //     time: 480,
  //   },
  //   {
  //     month: 'May',
  //     time: 500,
  //   },
  //   {
  //     month: 'June',
  //     time: 500,
  //   },
  //   {
  //     month: 'July',
  //     time: 500,
  //   },
  //   {
  //     month: 'August',
  //     time: 500,
  //   },
  //   {
  //     month: 'Setember',
  //     time: 500,
  //   },
  //   {
  //     month: 'October',
  //     time: 200,
  //   },
  //   {
  //     month: 'November',
  //     time: 500,
  //   },
  //   {
  //     month: 'December',
  //     time: 500,
  //   },
  // ];

  const sample = [
    { cate: 'A', values: [20, 31, 24, 60], types: ['1', '2', '3', '4']},
    { cate: 'B', values: [20, 2, 1, 60], types: ['1', '2', '3', '4']},
    { cate: 'C', values: [1, 31, 24, 60], types: ['1', '2', '3', '4']},
  ]

  function handleClick(e){
    sample.forEach(each => {
      if(each.cate === e.target.id){
        setData({values: each.values, types: each.types})
      }
    })
  }

  return (
    <Block marginVertical={20} column justifyCenter>
      <Block
        style={styles.dateContainer}
        row
        justifyContent={'space-around'}
        marginHorizontal={15}>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]} onPress={handleClick} id='A'>
          <Text color={themeNew.colors.textDark}>{t('day')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]} onPress={handleClick} id='B'>
          <Text color={themeNew.colors.textDark}>{t('month')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]} onPress={handleClick} id='C'>
          <Text color={themeNew.colors.textDark}>{t('year')}</Text>
        </TouchableOpacity>
      </Block>

      {/* <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          style={{data: {fill: '#0D7EF9', width: 15}}}
          animate={{
            duration: 3000,
            onLoad: {
              duration: 3000,
            },
          }}
          // data={data2}
          // x={data2.month}
          // y={data2.time}
        />
      </VictoryChart> */}
      <Plot
        data={[
          {
          type: 'bar',
          x: [1, 2, 3],
          y: [24, 15, 30]
          }
        ]}
        layout = {{width: 800, height: 500, title: 'Thời gian đọc'}}
        />
    </Block>
  );
};

export default withNamespaces()(ChartMoreMy);

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
