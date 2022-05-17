import React from 'react';
import {TouchableOpacity} from 'react-native';

const index = ({style, onPress, children}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};

export default index;
