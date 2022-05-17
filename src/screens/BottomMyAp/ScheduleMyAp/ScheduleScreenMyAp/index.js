import React from 'react';
import {useSelector} from 'react-redux';
import HeaderScheduleMyAp from '../components/HeaderScheduleMyAp';
import ScheduleContainer from './components/ScheduleContainer';

const ScheduleScreenMyAp = () => {
  const login = useSelector(state => state.login);

  return (
    <>
      <HeaderScheduleMyAp data={login.data?.user} />
      <ScheduleContainer />
    </>
  );
};

export default ScheduleScreenMyAp;
