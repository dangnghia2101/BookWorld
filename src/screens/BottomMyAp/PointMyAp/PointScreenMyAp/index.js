import React from 'react';
import HeaderScheduleMyAp from '@screens/BottomMyAp/ScheduleMyAp/components/HeaderScheduleMyAp';
import PointContainer from './components/PointContainer';
import {useSelector} from 'react-redux';

const PointScreenMyAp = () => {
  const login = useSelector(state => state.login);
  return (
    <>
      <HeaderScheduleMyAp data={login.data?.user} />
      <PointContainer />
    </>
  );
};

export default PointScreenMyAp;
