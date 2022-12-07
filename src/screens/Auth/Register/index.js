import { Block, Text, TextInput } from '@components';
import { useAppSelector } from '@hooks';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import { useLoginPhoneMutation } from '@redux/servicesNew';
import { PHONE_REG_EXP } from '@utils/constants';
import React, { useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'themeNew';
import ModalConfirmOtp from './components/ModalConfirmOtp';

async function getToken() {
    return await messaging().getToken();
}

const Register = () => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);

    const [loginPhone] = useLoginPhoneMutation();
    const [phone, setPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmOTP, setConfirmOTP] = useState(null);
    const [codeOTP, setCodeOTP] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    const { colors } = useTheme(themeStore);

    const handleErrorPhone = useMemo(() => {
        if (phone.match(PHONE_REG_EXP) || phone.length == 0) {
            return [false, ''];
        } else {
            return [true, 'Format phone invalid'];
        }
    }, [phone]);

    const handleErrorNewPassword = useMemo(() => {
        if (newPassword.length > 5 || newPassword.length == 0) {
            return [false, ''];
        } else {
            return [true, 'New password at least 6 character'];
        }
    }, [newPassword]);

    const handleErrorComfirmPassword = useMemo(() => {
        if (newPassword === confirmPassword) {
            return [false, ''];
        } else {
            return [true, 'Confirm password nat match New Password'];
        }
    }, [confirmPassword, newPassword]);

    const handleSendLogin = useMemo(() => {
        if (
            !handleErrorPhone[0] &&
            !handleErrorNewPassword[0] &&
            !handleErrorComfirmPassword[0]
        ) {
            return false;
        } else {
            return true;
        }
    }, [handleErrorPhone, handleErrorNewPassword, handleErrorComfirmPassword]);

    //Send OTP from Firebase
    const signInWithPhoneNumber = async () => {
        console.log('PHONE  +84 ' + phone);
        const confirmation = await auth().signInWithPhoneNumber('+84 ' + phone);
        setConfirmOTP(confirmation);
        setShowModal(true);
    };

    //Confirm code OTP
    async function confirmCode() {
        try {
            await confirmOTP.confirm(codeOTP);
            await callApiLogin();
            console.log('Register success.');
            setShowModal(false);
        } catch (error) {
            setShowModal(false);
            console.log('Invalid code.');
        }
    }

    const callApiLogin = async () => {
        const data = {
            phoneUser: phone,
            passwordUser: newPassword,
            token_fcm: await getToken(),
        };
        await loginPhone(data);
    };

    return (
        <Block
            flex
            alignCenter
            paddingTop={56}
            backgroundColor={'white'}
            paddingHorizontal={20}>
            <Text h1 bold size={30} style={styles.textWelcomLogin}>
                {' '}
                Xin Chào Bạn Mới{' '}
            </Text>
            <Text
                paddingHorizontal={45}
                marginVertical={40}
                size={13}
                lineHeight={20}
                center>
                {' '}
                Vui lòng đăng ký tài khoản để sử dụng ứng dụng Lưu ý nhập đầy đủ
                thông tin ở bên dưới{' '}
            </Text>

            <TextInput
                onChangeText={setPhone}
                value={phone}
                label={'Phone number'}
                placeholder={'Số điện thoại'}
                keyboardType="phone-pad"
                errorText={handleErrorPhone[1]}
                isError={handleErrorPhone[0]}
            />
            <TextInput
                onChangeText={setNewPassword}
                value={newPassword}
                label={'New Password'}
                placeholder={'Mật khẩu'}
                isSecure={true}
                errorText={handleErrorNewPassword[1]}
                isError={handleErrorNewPassword[0]}
            />
            <TextInput
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                label={'Confirm Passord'}
                placeholder={'Nhập lại mật khẩu'}
                isSecure={true}
                errorText={handleErrorComfirmPassword[1]}
                isError={handleErrorComfirmPassword[0]}
            />

            <ModalConfirmOtp
                confirmCode={confirmCode}
                setShowModal={setShowModal}
                showModal={showModal}
                setConfirmOTP={setConfirmOTP}
                setCodeOTP={setCodeOTP}
                codeOTP={codeOTP}
                phone = {phone}
            />

            <TouchableOpacity
                onPress={signInWithPhoneNumber}
                disabled={handleSendLogin}
                style={styles({ isDisable: handleSendLogin }).buttomLogin}
                height={59}>
                <Text
                    style={{
                        fontSize: 16,
                        lineHeight: 50,
                        alignItems: 'center',
                        fontWeight: '700',
                        fontFamily: 'Poppins',
                        color: '#FFFFFF',
                    }}>
                    Đăng ký
                </Text>
            </TouchableOpacity>
        </Block>
    );
};

export default Register;

const styles = ({ isDisable }) =>
    StyleSheet.create({
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
            fontSize: 16,
            lineHeight: 50,
            alignItems: 'center',
            fontWeight: '700',
            color: '#FFFFFF',
        },
        buttomLogin: {
            width: '100%',
            marginTop: 43,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: isDisable ? '#818181' : '#DD4455',
            height: 50,
            shadowColor: '#000',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
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
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
        },
        textInput: {
            borderRadius: 15,
            width: '88%',
            color: '#818181',
            height: 59,
            fontWeight: '600',
            backgroundColor: '#F3F3F3',
            marginTop: 10,
            paddingHorizontal: 20,
        },
        textWelcomLogin: {
            fontWeight: 'bold',
            lineHeight: 45,
            color: '#464444',
        },
        textDescribe: {
            marginTop: 18,
            fontWeight: '500',
        },
    });
