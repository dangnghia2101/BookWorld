import React, {useEffect, useState} from 'react';
import {Block, Text, Button} from '@components';
import {
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
  TextInput,
  Image,
} from 'react-native';
import Topbar from 'common/Topbar';
import {FlatList} from 'react-native-gesture-handler';
import CurrencyInput from 'react-native-currency-input';
import {theme} from '@theme';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import IconView from '@components/Icon';

import CryptoJS from 'crypto-js';
const {PayZaloBridge} = NativeModules;
const payZaloBridgeEmitter = new NativeEventEmitter(PayZaloBridge);

const subscription = payZaloBridgeEmitter.addListener('EventPayZalo', data => {
  console.log('Kết quả giao dịch: ' + data.returnCode);
  if (data.returnCode == -1) {
    let payZP = NativeModules.PayZaloBridge;
    payZP.installApp();
    console.log('pay install');
  } else if (data.retturnCode == 1) {
    console.log('pay success');
  } else {
    console.log('pay success', data.returnCode);
  }
});

const Payment = () => {
  const [money, setMoney] = React.useState(0);
  const myMoney = '100,000đ';
  const [colorZalopay, setColorZalopay] = React.useState(0);
  const [token, setToken] = React.useState('');
  const [returncode, setReturnCode] = React.useState('');
  const [showMoney, setShowMoney] = React.useState(false);

  function getCurrentDateYYMMDD() {
    var todayDate = new Date().toISOString().slice(2, 10);
    return todayDate.split('-').join('');
  }

  async function createOrder(money) {
    setColorZalopay(1);
    let apptransid = getCurrentDateYYMMDD() + '_' + new Date().getTime();

    let appid = 2553;
    let amount = parseInt(money);
    let appuser = 'ZaloPayDemo';
    let apptime = new Date().getTime();
    let embeddata = '{}';
    let item = '[]';
    let description = 'Merchant description for order #' + apptransid;
    let hmacInput =
      appid +
      '|' +
      apptransid +
      '|' +
      appuser +
      '|' +
      amount +
      '|' +
      apptime +
      '|' +
      embeddata +
      '|' +
      item;
    let mac = CryptoJS.HmacSHA256(
      hmacInput,
      'PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL',
    );
    console.log('====================================');
    console.log('hmacInput: ' + hmacInput);
    console.log('mac: ' + mac);
    console.log('====================================');
    var order = {
      app_id: appid,
      app_user: appuser,
      app_time: apptime,
      amount: amount,
      app_trans_id: apptransid,
      embed_data: embeddata,
      item: item,
      description: description,
      mac: mac,
    };

    console.log(order);

    let formBody = [];
    for (let i in order) {
      var encodedKey = encodeURIComponent(i);
      var encodedValue = encodeURIComponent(order[i]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    await fetch('https://sb-openapi.zalopay.vn/v2/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(resJson => {
        setToken(resJson.zp_trans_token);
        setReturnCode(resJson.return_code);
      })
      .catch(error => {
        console.log('error ', error);
      });
  }

  function payOrder() {
    let payZP = PayZaloBridge;
    payZP.payOrder(token);
  }

  // useEffect(() => {
  //   console.log('Vô nè');
  //   const subscription = payZaloBridgeEmitter.addListener(
  //     'EventPayZalo',
  //     data => {
  //       if (data.returnCode == 1) {
  //         // handle action
  //         console.log('Pay success');
  //       } else if (data.returnCode == -1) {
  //         PayZaloBridge.installApp();
  //         console.log('Pay errror! ' + data.returnCode);
  //       }
  //     },
  //   );
  //   return () => subscription?.remove();
  // });

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Topbar title={'Nạp tiền'} />
      <Block style={styles.container}>
        <Block radius={15} width={'90%'} style={styles.shadow}>
          <Block row space={'between'} padding={15} style={styles.underline}>
            <Text color={theme.colors.gray2}> Số dư tài khoản </Text>
            <Button onPress={() => setShowMoney(!showMoney)}>
              <Block row alignCenter justifyCenter>
                <Text marginHorizontal={10} fontType={'bold'}>
                  {showMoney ? 'Xem số dư' : myMoney}
                </Text>
                <IconView
                  component={'Ionicons'}
                  name={showMoney ? 'md-eye' : 'md-eye-off'}
                  size={20}
                  color={theme.colors.dark}
                />
              </Block>
            </Button>
          </Block>
          <Block marginTop={5} paddingHorizontal={20}>
            <Text>Nhập số tiền cần nạp</Text>
            <CurrencyInput
              onChangeValue={value => setMoney(value)}
              prefix="Đ"
              delimiter=","
              separator="."
              precision={0}
              value={money}
              keyboardType="numeric"
              placeholder=""
              style={styles.inputText}
            />
          </Block>

          <Block
            width={'100%'}
            style={{flexWrap: 'wrap'}}
            row
            paddingHorizontal={20}
            paddingBottom={15}>
            <Block
              backgroundColor={theme.colors.gray3}
              radius={10}
              paddingHorizontal={15}
              paddingVertical={5}
              margin={5}>
              <Text>100.000</Text>
            </Block>
            <Block
              backgroundColor={theme.colors.gray3}
              radius={10}
              paddingHorizontal={15}
              paddingVertical={5}
              margin={5}>
              <Text>200.000</Text>
            </Block>
            <Block
              backgroundColor={theme.colors.gray3}
              radius={10}
              paddingHorizontal={15}
              paddingVertical={5}
              margin={5}>
              <Text>300.000</Text>
            </Block>
            <Block
              backgroundColor={theme.colors.gray3}
              radius={10}
              paddingHorizontal={15}
              paddingVertical={5}
              margin={5}>
              <Text>400.000</Text>
            </Block>
          </Block>
        </Block>

        {/* Phương thức thanh toán */}

        <Block width={'90%'} marginTop={30}>
          <Text>Phương thức thanh toán</Text>

          <Button onPress={() => createOrder(money)}>
            <Block
              style={styles.shadow1}
              radius={15}
              width={'100%'}
              paddingHorizontal={20}
              backgroundColor={
                colorZalopay === 0 ? theme.colors.white : theme.colors.green
              }
              justifyCenter>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/vi/7/77/ZaloPay_Logo.png',
                }}
                style={styles.imagePay}
              />
            </Block>
          </Button>

          <Button>
            <Block
              style={styles.shadow1}
              radius={15}
              width={'100%'}
              paddingHorizontal={20}
              justifyCenter>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrECu3WJZvBvu3XZYXzzBnbnBcHGoXpdtWCRyMD8QCDBSmvNs_S8YuC8GQ6Zw-6qlJqrw&usqp=CAU',
                }}
                style={styles.imagePay}
              />
            </Block>
          </Button>
        </Block>

        {returncode > 0 ? (
          <Button
            onPress={payOrder}
            style={{width: '90%', justifyContent: 'center'}}>
            <Block
              marginTop={20}
              style={styles.shadow1}
              radius={15}
              width={'100%'}
              justifyCenter
              backgroundColor={theme.colors.red}
              height={55}
              alignCenter>
              <Text color={theme.colors.white}>Thanh toán</Text>
            </Block>
          </Button>
        ) : null}

        {/* <Button
          onPress={() => {
            createOrder(money);
          }}>
          <Text>Create order</Text>
        </Button>
        <Text style={styles.welcome}>ZpTranstoken: {token}</Text>
        <Text style={styles.welcome}>returncode: {returncode}</Text>
        {returncode == 1 ? (
          <Button
            onPress={() => {
              payOrder();
            }}>
            <Text>Pay order</Text>
          </Button>
        ) : null} */}
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  welcomeHead: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputText: {
    marginBottom: 20,
    fontSize: 22,
    borderBottomWidth: 2,
    borderLeftColor: theme.colors.black,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: theme.colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.19,
    shadowRadius: 4.65,

    elevation: 5,
  },
  shadow1: {
    shadowColor: theme.colors.gray2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.19,
    shadowRadius: 4.65,

    elevation: 5,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray3,
  },
  imagePay: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginBottom: -10,
  },
});

export default Payment;
