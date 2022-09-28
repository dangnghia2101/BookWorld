import {Block} from '@components';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

const BodyThemeMode = () => {
  const [value, setValue] = React.useState('on');

  return (
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Bật" value="on" color="#FF7D54" />
      <RadioButton.Item label="Tắt" value="off" color="#FF7D54" />
      <RadioButton.Item label="Hệ thống" value="system" color="#FF7D54" />
    </RadioButton.Group>
  );
};

export default BodyThemeMode;
