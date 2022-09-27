import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

const BodyChangeLanguage = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Tiếng việt" value="first" color='#FF7D54' mode='ios'/>
      <RadioButton.Item label="English" value="second" color='#FF7D54' mode='ios' />
    </RadioButton.Group>
  );
};

export default BodyChangeLanguage;
