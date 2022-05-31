import React from 'react';
import {Block, Text} from '@components';
import {Image} from 'react-native';
import NotificationAbout from './NotificationAbout';
import HeaderNotification from './HeaderNotification';
const InformScreenMyApp = () => {
  return (
    <Block>
      <HeaderNotification />
      <NotificationAbout />
    </Block>
  );
};

export default InformScreenMyApp;
