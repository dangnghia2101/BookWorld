import React, {useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import InfoServiceComponent from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/common/InfoServiceComponent';

const ReRegisterStudyScreen = ({route}) => {
  const {title} = route?.params;
  const data = ['Reactjs', 'Angular', 'HTML & CSS'];

  const date = {
    timeAfter: '15/3/2022',
    timeBefore: '20/3/2022',
    time: '26/11/2022',
  };

  const dataSlot = ['Ca 1 (07:15:00 - 9:15:00)', 'Ca 2 (09:15:00 - 9:15:00)'];
  const handleSubmit = useCallback((value, type) => {
    // console.log(value, type);
  }, []);
  return (
    <View style={styles.container}>
      <HeaderWithButton title={title} isBackHeader={true} />
      <ScrollView>
        <InfoServiceComponent
          data={data}
          date={date}
          submit={handleSubmit}
          dataSlot={dataSlot}
          titleSelect1="Chọn môn"
          titleSelect2="Chọn ca"
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
export default ReRegisterStudyScreen;
