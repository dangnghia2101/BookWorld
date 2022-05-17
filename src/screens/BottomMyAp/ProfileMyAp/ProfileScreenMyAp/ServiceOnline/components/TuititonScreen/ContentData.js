import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '@theme';
import {Text} from '@components';

const ContentData = ({item}) => {
  return (
    <View style={styles.container}>
      <>
        <Text paddingVertical={10} fontType={'bold'}>
          Thông tin sinh viên
        </Text>
      </>
      <View style={styles.textBody}>
        <Text style={styles.textContent}>
          Họ và tên: <Text fontType={'bold'}>{item.name}</Text>
        </Text>
        <Text style={styles.textContent}>Mã sinh viên: {item.studentcode}</Text>
        <Text style={styles.textContent}>Kỳ học: {item.semester}</Text>
        <Text style={styles.textContent}>Trạng thái: {item.status}</Text>
        <Text style={styles.textContent}>Tổng tiền: {item.total}</Text>
        <Text style={styles.textContent}>
          Thời gian gia hạn:{' '}
          <Text fontType={'bold'} color={theme.colors.orangeBol}>
            {item.time}
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 5,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    borderRadius: 8.5,
    elevation: 3,
    flex: 1,
  },
  textContent: {
    color: theme.colors.black,
    marginTop: 10,
  },
  textBody: {
    borderTopWidth: 1,
    borderColor: theme.colors.gray3,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default memo(ContentData);
