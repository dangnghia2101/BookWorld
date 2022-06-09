import {Block, Text} from '@components';
import React, {useEffect} from 'react';
import {StyleSheet, TextInput, Pressable, Modal, Button} from 'react-native';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <Block flex={1} style={styles.modalBackGround}>
        <Block style={styles.modalContainer}>{children}</Block>
      </Block>
    </Modal>
  );
};

const Register = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Block flex alignCenter paddingTop={56} backgroundColor={'white'}>
      <Text h1 bold size={30} style={styles.textWelcomLogin}>
        {' '}
        Xin Chào Bạn Mới{' '}
      </Text>
      <Text paddingHorizontal={45} size={13} lineHeight={20} center>
        {' '}
        Vui lòng đăng ký tài khoản để sử dụng ứng dụng Lưu ý nhập đầy đủ thông
        tin ở bên dưới{' '}
      </Text>
      <TextInput placeholder={'Số điện thoại'} style={styles.textInput} />
      <TextInput placeholder={'Họ và tên'} style={styles.textInput2} />
      <TextInput placeholder={'Mật khẩu'} style={styles.textInput2} />
      <TextInput placeholder={'Nhập lại mật khẩu'} style={styles.textInput2} />
      <ModalPoup visible={visible}>
        <Block alignCenter={'center'}>
          <Text style={styles.textOTP} center>
            Mã OTP đã được gửi về số điện thoại của bạn
          </Text>
          <Text marginTop={18} style={styles.textPhone}>
            (099999xxxx)
          </Text>
          <Block style={styles.textOPTContainer}>
            <TextInput style={styles.textInputOTP} />
            <TextInput style={styles.textInputOTP} />
            <TextInput style={styles.textInputOTP} />
            <TextInput style={styles.textInputOTP} />
          </Block>
          <Pressable
            style={styles.buttomLogin}
            onPress={() => setVisible(false)}>
            <Text style={styles.textButtomLogin} height={55}>
              Đồng ý
            </Text>
          </Pressable>
        </Block>
      </ModalPoup>
      <Pressable
        onPress={() => setVisible(true)}
        style={styles.buttomLogin}
        height={59}>
        <Text style={styles.textButtomLogin}>Đăng ký</Text>
      </Pressable>
    </Block>
  );
};

export default Register;

const styles = StyleSheet.create({
  textOPTContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 24,
  },
  textInputOTP: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#FBFBFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#14224A',
    alignContent: 'center',
    paddingHorizontal: 20,
    fontSize: 20,
  },
  textPhone: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 23,
    color: '#000000',
  },
  textOTP: {
    fontSize: 15,
    lineHeight: 23,
    color: '#575555',
    fontStyle: 'normal',
  },
  modalContainer: {
    width: '88%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  modalBackGround: {
    backgroundColor: 'rgba(253,253,253,0.5)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textButtomLogin: {
    fontSize: 22,
    lineHeight: 50,
    alignItems: 'center',
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
  buttomLogin: {
    width: '88%',
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#DD4455',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  textInput2: {
    borderRadius: 15,
    width: '88%',
    color: '#818181',
    height: 59,
    fontWeight: '600',
    backgroundColor: '#F3F3F3',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    paddingLeft: 18,
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  textInput: {
    borderRadius: 15,
    width: '88%',
    color: '#818181',
    height: 59,
    fontWeight: '600',
    backgroundColor: '#F3F3F3',
    marginTop: 54,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    paddingLeft: 18,
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  textWelcomLogin: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 45,
    color: '#464444',
  },
  textDescribe: {
    marginTop: 18,
    fontWeight: '500',
  },
});
