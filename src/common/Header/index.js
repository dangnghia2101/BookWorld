import {Block, TextInput} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {UIActivityIndicator} from 'react-native-indicators';

const Header = () => {
  return (
    <Block flex justifyCenter alignCenter backgroundColor="rgba(0,0,0,0.2)">
      <TextInput value={'Tìm kiếm'} isSecure />
    </Block>
  );
};

export default Header;
