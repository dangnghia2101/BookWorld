import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@components';
import {theme} from '@theme';

const SectionFooter = ({userCode}) => {
  return (
    <View style={styles.container}>
      <Text color={theme.colors.black} fontType={'bold'}>
        Lưu ý: Khi thực hiện thanh toán qua DNG mã sinh viên của bạn là{' '}
        <Text fontType={'bold'} color={theme.colors.red}>
          {userCode}
        </Text>
      </Text>
      <Text marginTop={5}>
        Trong trường hợp sinh viên đã thanh toán nhưng trạng thái đơn chưa đổi
        sang{' '}
        <Text fontType={'bold'} color={theme.colors.green}>
          Đã thanh toán
        </Text>
        , sinh viên phải chủ động nhấn nút{' '}
        <Text color={theme.colors.red} fontType={'bold'}>
          Kiểm tra thanh toán DNG
        </Text>{' '}
        để cập nhật trạng thái đơn
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
});
export default memo(SectionFooter);
