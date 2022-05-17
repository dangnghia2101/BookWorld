import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Block, Text, Button} from '@components';
import {theme} from '@theme';

const ItemServiceRegistered = ({item}) => {
  return (
    <View style={styles.container}>
      <>
        <Text style={styles.text}>
          Mã đơn: <Text fontType={'bold'}>{item.code}</Text>
        </Text>
        <Text style={styles.text}>
          Loại dịnh vụ: <Text fontType={'bold'}>{item.listService}</Text>
        </Text>
        <Text style={styles.text}>
          Thời gian: <Text fontType={'bold'}>{item.time}</Text>
        </Text>
        <Text style={styles.text}>
          Trạng thái:{' '}
          <Text fontType={'bold'} color={theme.colors.green}>
            {item.status}
          </Text>
        </Text>
        <Text style={styles.text}>
          Thông báo: <Text fontType={'bold'}>{item.notification}</Text>
        </Text>
        <Block row alignCenter>
          <Text style={[styles.text, styles.textAction]}>Hành động:</Text>
          <Button style={styles.buttonCancel}>
            <Text color={theme.colors.white} fontType={'bold'}>Huỷ dịch vụ </Text>
          </Button>
        </Block>
      </>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonCancel: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.red,
  },
  textAction: {
    borderBottomWidth: 0,
  },
  container: {
    margin: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 8.5,
    elevation: 3,
  },
  text: {
    color: 'black',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(158, 150, 150, .5)',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonStyle: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
});
export default ItemServiceRegistered;
