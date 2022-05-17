import React, {useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import InfoServiceComponent from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/common/InfoServiceComponent';

const RegisterChangeMajorsScreen = ({route}) => {
  const {title} = route?.params;
  const data = ['Thiết kế trang Web', 'Đồ họa', 'Mobile', 'Dirital Marketing'];
  const date = {
    timeAfter: '15/3/2022',
    timeBefore: '20/3/2022',
    time: '26/11/2022',
  };
  const handleSubmit = useCallback((value, type) => {}, []);
  return (
    <View style={styles.container}>
      <HeaderWithButton title={title} isBackHeader={true} />
      <ScrollView>
        <InfoServiceComponent
          data={data}
          date={date}
          submit={handleSubmit}
          titleSelect1="Chọn ngành"
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
export default RegisterChangeMajorsScreen;
