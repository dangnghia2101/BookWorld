import React, {useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import InfoServiceComponent from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/common/InfoServiceComponent';

const ReRegisterExamScreen = ({route}) => {
  const {title} = route?.params;
  const data = ['Reactjs', 'Angular', 'HTML & CSS'];
  const date = {
    timeAfter: '15/3/2022',
    timeBefore: '20/3/2022',
    time: '26/11/2022',
  };
  const handleSubmit = useCallback((value, info) => {
    // console.log(value, 'value');
    // console.log(info, 'info');
  }, []);
  return (
    <View style={styles.container}>
      <HeaderWithButton title={title} isBackHeader={true} />
      <ScrollView>
        <InfoServiceComponent
          data={data}
          type="Đăng kí thi lại"
          date={date}
          submit={handleSubmit}
          titleSelect1="Chọn môn"
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
export default ReRegisterExamScreen;
