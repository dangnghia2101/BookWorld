import React, {useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import InfoServiceComponent from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/common/InfoServiceComponent';

const RegisterReserveScreen = ({route}) => {
  const {title} = route?.params;
  const data = ['Hoàn thành', 'Chưa hoàn thành'];
  const date = {
    timeAfter: '15/3/2022',
    timeBefore: '20/3/2022',
    time: '26/11/2022',
  };
  const handleSubmit = useCallback((value, info) => {
    // console.log(value);
    // console.log(info);
  }, []);
  return (
    <View style={styles.container}>
      <HeaderWithButton title={title} isBackHeader={true} />
      <ScrollView>
        <InfoServiceComponent
          data={data}
          date={date}
          submit={handleSubmit}
          type="Đăng kí bảo lưu"
          number={true}
          reason="Bảo lưu"
          titleSelect1="Trạng thái"
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default RegisterReserveScreen;
