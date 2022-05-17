import {ScrollView} from 'react-native';
import React from 'react';
import {Block} from '@components';
import ItemFeature from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/components/ItemFeature';
import {theme} from '@theme';
import {routes as router} from '@navigation/routes';
import HeaderScheduleMyAp from '@screens/BottomMyAp/ScheduleMyAp/components/HeaderScheduleMyAp';
import {useSelector} from 'react-redux';

const ProfileScreenMyAp = () => {
  const data = [
    {
      icon: 'heart-half',
      color: theme.colors.red,
      link: 'Ionicons',
      content: 'Khen thưởng & Kỷ luật',
      intro: 'Xem thông tin khen thưởng và kỷ luật',
      route: router.BLANK_SCREEN,
    },
    {
      icon: 'planet-outline',
      color: theme.colors.blue,
      link: 'Ionicons',
      content: 'Dịch vụ trực tuyến',
      intro: 'Sử dụng các dịch trực tuyến',
      route: router.LIST_SERVICE_NAVIGATION,
    },
    {
      icon: 'phone-call',
      color: theme.colors.green,
      link: 'Feather',
      content: 'SMS',
      intro: 'Danh sách số điện thoại nhận SMS',
      route: router.SMS_SCREEN_PROFILE,
    },
    {
      icon: 'creditcard',
      color: theme.colors.orange,
      link: 'AntDesign',
      content: 'Học phí',
      intro: 'Thông tin giao dịch, hoá đơn',
      route: router.TUITION_SCREEN_PROFILE,
    },
    {
      icon: 'setting',
      color: theme.colors.gray3,
      link: 'AntDesign',
      content: 'Cài đặt',
      intro: 'Cài đặt tính năng cho app',
      route: router.SETTING_NAVIGATION,
    },
  ];
  const login = useSelector(state => state.login);
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <HeaderScheduleMyAp data={login.data?.user} />
      <ScrollView>
        <Block flex>
          {data.map((item, index) => (
            <Block key={index} flex padding={10}>
              <ItemFeature item={item} />
            </Block>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProfileScreenMyAp;
