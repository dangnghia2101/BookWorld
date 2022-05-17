import React from 'react';
import HeaderWithButton from '@components/HeaderWithButton';
import {Block, Text} from '@components';
import ItemReward from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/components/ItemReward';

const RewardScreen = ({route}) => {
  const data = [
    {
      id: 1,
      kihoc: 'Spring 2019',
      ngaynhanthuong: '30/5/2019',
      noidung: 'Sinh viên giỏi',
      nguoiky: 'Vũ Chí Thành',
      soquyetdinh: '737/QĐ-ĐHFPT',
    },
    {
      id: 2,
      kihoc: 'Summer 2021',
      ngaynhanthuong: '30/5/2021',
      noidung: 'Sinh viên giỏi',
      nguoiky: 'Vũ Chí Thành',
      soquyetdinh: '739/QĐ-ĐHFPT',
    },
  ];
  const {title} = route?.params;
  return (
    <Block flex>
      <HeaderWithButton title={title} isBackHeader={true} />
      {data && data.length > 0 ? (
        data.map((item, index) => <ItemReward key={index} item={item} />)
      ) : (
        <Block alignCenter justifyCenter flex>
          <Text center>Không có dữ liệu!</Text>
        </Block>
      )}
    </Block>
  );
};
export default RewardScreen;
