import React from 'react';
import {ScrollView} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import ItemServiceRegistered from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/RegistedService/ItemServiceRegistered';
const data = [
  {
    code: '7129-AA/19E',
    listService: 'Đăng ký học lại',
    time: '27-3-2022 11:45:20',
    status: 'Đã hoàn thành',
    notification: 'Đã đăng ký thành công',
  },
  {
    code: '59952-AA/21E',
    listService: 'Đăng ký bảo lưu',
    time: '27-3-2022 12:45:20',
    status: 'Đã hoàn thành',
    notification: 'Đã đăng ký thành công',
  },
  {
    code: '59952-AA/21E',
    listService: 'Đăng ký bảo lưu',
    time: '27-3-2022 12:45:20',
    status: 'Đã hoàn thành',
    notification: 'Đã đăng ký thành công',
  },
];
const RegisteredServiceScreen = ({route}) => {
  const {title} = route?.params;
  return (
    <>
      <HeaderWithButton title={title} isBackHeader={true} />
      <ScrollView>
        {data.map((item, index) => (
          <ItemServiceRegistered item={item} key={index} />
        ))}
      </ScrollView>
    </>
  );
};

export default RegisteredServiceScreen;
