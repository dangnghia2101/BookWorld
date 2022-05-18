import React from 'react';
import {Block, Text} from '@components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreenMyAp = _props => {
  return (
    <Block flex alignCenter justifyCenter>
      <Text>Home</Text>
      <MaterialCommunityIcons size={20} name="abacus" color="#4F8EF7" />
      {/* <MaterialCommunityIcons name="home" color={color} size={size} /> */}
    </Block>
  );
};

HomeScreenMyAp.propTypes = {};

export default HomeScreenMyAp;
