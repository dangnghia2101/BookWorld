import { icons } from '@assets';
import { Block, ModalBox, Text, TextInput } from '@components';
import { routes } from '@navigation/routes';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { PHONE_REG_EXP } from '@utils/constants';
import { changeLoading } from '@redux/reducerNew';
import { useLoginMutation } from '@redux/servicesNew';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useLoginPhoneNumberMutation } from '@redux/servicesNew';
import {
    Image,
    Modal,
    Pressable,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';
const ModalPoup = ({ visible, children }) => {
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

const Login = ({ t }) => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const theme = useTheme(themeStore);
    const [visible2, setVisible2] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible, setVisible] = useState(false);
    const [hide, setHide] = useState(false);
    const navigation = useNavigation();
    const [login, { isLoading: isUpdating }] = useLoginMutation();
    const [loginPhone, { isLoading: isUpDating }] =
        useLoginPhoneNumberMutation();
    const dispatch = useAppDispatch();
    const [visibleModal, setVisibleModal] = useState(false);
    const [phoneUser, setPhoneUser] = useState('');
    const [password, setPassword] = useState('');
    // const [auth, setAuth] = useState('signin');

    // const handleErrorPhone = useMemo(() => {
    //     if (phoneUser.match(PHONE_REG_EXP) || phoneUser.length == 0) {
    //         return [false, ''];
    //     } else {
    //         return [true, 'Format phone invalid'];
    //     }
    // }, [phoneUser]);

    // const handleErrorNewPassword = useMemo(() => {
    //     if (password.length > 5 || password.length == 0) {
    //         return [false, ''];
    //     } else {
    //         return [true, 'New password at least 6 character'];
    //     }
    // }, [password]);

    const LoginPhone = () => {
        // if (auth == 'signin') {
        // dispatch(login({ phoneUser, password }));
        // }
    };

    const HidePassword = () => {
        if (hide === true) {
            setHide(false);
        } else {
            setHide(true);
        }
    };

    const ForgotPassword = () => {
        setVisible2(false);
    };

    const status = id => {
        switch (id) {
            case 0:
                setVisible(true);
                setVisible1(false);
                setVisible2(false);
                break;
            case 1:
                setVisible1(true);
                setVisible(false);
                setVisible2(false);
                break;
            case 2:
                setVisible1(false);
                setVisible(false);
                setVisible2(true);
                break;
        }
    };

    // useEffect(() => {
    //     dispatch(changeLoading(isUpDating ? 'SHOW' : 'HIDE'));
    // }, [dispatch, isUpDating]);

    useEffect(() => {
        dispatch(changeLoading(isUpdating ? 'SHOW' : 'HIDE'));
    }, [dispatch, isUpdating]);

    GoogleSignin.configure({
        webClientId:
            '1078600024718-r4kttklrp4av6li4mqs9b5ctnhbm6aob.apps.googleusercontent.com',
    });

    async function getToken() {
        return await messaging().getToken();
    }

    const _signIngoogle = async () => {
        await GoogleSignin.signOut();
        const currentUser = await GoogleSignin.getCurrentUser();

        if (currentUser) {
            await GoogleSignin.revokeAccess();
        }

        try {
            // Get the users ID token
            // await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();
            // get fcm token
            const fcmToken = await getToken();

            _handleLogin(idToken, fcmToken);

            // Storage.setItem('tokenId', idToken);

            const googleCredential =
                auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log('=========> id error login', error);

            // await API.post('logs/write', {message: error});
        }
    };

    const _handleLogin = async (token, fcmToken) => {
        const body = {
            token: token,
            token_fcm: fcmToken,
        };
        const dataLogin = await login(body);
        if (dataLogin?.error?.data?.error) {
            setVisibleModal(true);
        }
    };

    // const _singInPhoneNumber = async () => {
    //     try {
    //         const fcmToken = await getToken();
    //         _handleLoginPhone(phoneUser, password, fcmToken);
    //         console.log(
    //             '===========> Đăng nhập thành công',
    //             phoneUser,
    //             password,
    //             fcmToken,
    //         );
    //     } catch (error) {
    //         console.log('=========> id error login', error);

    //         // await API.post('logs/write', {message: error});
    //     }
    // };

    const _handleLoginPhone = async () => {
        const body = {
            passwordUser: password,
            phoneUser: phoneUser,
            token_fcm: await getToken(),
        };
        console.log('===========> body', body);
        const dataLogin = await loginPhone(body);
        if (dataLogin.error === false) {
            console.log('===========> Đăng nhập thành công', body);
        } else {
            console.log('===========> Đăng nhập ko thành công', body);
        }
        // if (dataLogin?.error?.data?.error) {
        //     setVisibleModal(true);
        // }
    };
    return (
        <Block flex alignCenter paddingTop={56} backgroundColor={'white'}>
            <Text fontType='bold' h1 bold size={30} style={styles.textWelcomLogin}>
                {' '}
                {t('welcomeBack')}{' '}
            </Text>
            <Text fontType='medium1' paddingHorizontal={61} size={13} lineHeight={20} center>
                {' '}
                {t('loginToUseApp')}{' '}
            </Text>
            <TextInput
                value={phoneUser}
                onChangeText={text => setPhoneUser(text)}
                keyboardType="numeric"
                placeholder={t('phone')}
                style={styles.textInput}
                color={theme.colors.grey4}
                placeholderTextColor={theme.colors.grey10}
            />
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={hide}
                placeholder={'Mật khẩu'}
                isSecure={true}
                errorText={handleErrorNewPassword[1]}
                isError={handleErrorNewPassword[0]}
            />
            {/* <Block style={styles.inputPassword}>
                {hide ? (
                    <MaterialCommunityIcons
                        name={'eye-outline'}
                        size={25}
                        style={styles.hide}
                        color={theme.colors.grey11}
                        onPress={() => HidePassword()}
                    />
                ) : (
                    <MaterialCommunityIcons
                        name={'eye-off-outline'}
                        size={25}
                        style={styles.hide}
                        onPress={() => HidePassword()}
                    />
                )}
            </Block> */}
            <Text
                bold
                size={15}
                style={styles.textRemember}
                fontType='medium1'
                onPress={() => status(0)}>
                {' '}
                {t('forGot')}{' '}
            </Text>
            <TouchableOpacity
                style={styles.buttomLogin}
                onPress={() => _handleLoginPhone()}>
                <Text fontType='bold1' style={styles.textButtomLogin}> {t('login')}</Text>
            </TouchableOpacity>
            <Block marginTop={20}>
                <TouchableOpacity
                    onPress={() => _signIngoogle()}
                    style={styles.loginGoogle}
                    marginHorizontal={10}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/images/GG.png')}
                    />
                    <Text fontType='medium1' style={styles.textLoginGmail}>
                        {t('logWithGoogle')}
                    </Text>
                </TouchableOpacity>
            </Block>
            <Block marginTop={100}>
                <Text fontType='medium1'>
                    {t('doNotHaveAnAccount')} {'  '}
                    <Text
                        fontType='bold1'
                        style={styles.textRegister}
                        onPress={() =>
                            navigation.navigate(routes.REGISTER_SCREEN)
                        }>
                        {t('register')}
                    </Text>
                </Text>
            </Block>

            {/* Modle when api wrong */}
            <ModalBox
                isVisible={visibleModal}
                onBackdropPress={() => setVisibleModal(!visibleModal)}>
                <Block
                    backgroundColor={'white'}
                    radius={15}
                    alignSelf={'center'}
                    justifyCenter={'center'}
                    padding={20}>
                    <Image source={icons.logo} style={styles.iconLogo} />
                    <Text>Server not work</Text>
                </Block>
            </ModalBox>
            <ModalPoup visible={visible2}>
                <Block alignCenter={'center'}>
                    <Text style={styles.textOTP} center>
                        Đặt lại mật khẩu
                    </Text>
                    <Text marginTop={18} center style={styles.textPhone}>
                        Đặt lại mật khẩu mới cho tài khoản của bạn để có thể
                        đăng nhập.
                    </Text>
                    <Block style={styles.textPhoneContainer}>
                        <TextInput
                            style={styles.textInputOTP}
                            placeholder={'Mật khẩu'}
                        />
                        <TextInput
                            marginTop={20}
                            style={styles.textInputOTP}
                            placeholder={'Nhập lại mật khẩu'}
                        />
                    </Block>
                    <Pressable
                        style={styles.buttomLogin}
                        onPress={() => ForgotPassword()}>
                        <Text style={styles.textButtomLogin} height={55}>
                            Thay đổi mật khẩu
                        </Text>
                    </Pressable>
                </Block>
            </ModalPoup>
            <ModalPoup visible={visible1}>
                <Block alignCenter={'center'}>
                    <Text style={styles.textOTP} center>
                        Nhập mã OTP
                    </Text>
                    <Text marginTop={18} center style={styles.textPhone}>
                        Nhập mã OTP được gửi đến số điện thoại của bạn
                    </Text>
                    <Block style={styles.textOPTContainer}>
                        <TextInput style={styles.textInputOTP1} />
                        <TextInput style={styles.textInputOTP1} />
                        <TextInput style={styles.textInputOTP1} />
                        <TextInput style={styles.textInputOTP1} />
                    </Block>
                    <Pressable
                        style={styles.buttomLogin}
                        onPress={() => status(2)}>
                        <Text style={styles.textButtomLogin} height={55}>
                            Tiếp tục
                        </Text>
                    </Pressable>
                </Block>
            </ModalPoup>
            <ModalPoup visible={visible}>
                <Block alignCenter={'center'}>
                    <Text style={styles.textOTP}>Forgot password</Text>
                    <Text marginTop={18} center style={styles.textPhone}>
                        Nhập số điện thoại của bạn cho quy trình xác minh. Chúng
                        tôi sẽ gửi mã 4 chữ số cho bạn.
                    </Text>
                    <Block style={styles.textPhoneContainer}>
                        <TextInput
                            keyboardType="numeric"
                            placeholder={'Số điện thoại'}
                            style={styles.textInputOTP}
                        />
                    </Block>
                    <Pressable
                        style={styles.buttomLogin}
                        onPress={() => status(1)}>
                        <Text style={styles.textButtomLogin} height={55}>
                            Tiếp tục
                        </Text>
                    </Pressable>
                </Block>
            </ModalPoup>
        </Block>
    );
};

export default withNamespaces()(Login);

const styles = StyleSheet.create({
    hide: {
        position: 'absolute',
        left: '90%',
        top: '50%'
    },
    textInputOTP1: {
        width: 50,
        height: 60,
        marginHorizontal: 10,
        backgroundColor: '#FBFBFB',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#14224A',
        alignContent: 'center',
        paddingHorizontal: 20,
        fontSize: 20,
    },
    textOPTContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 24,
    },
    textPhoneContainer: {
        justifyContent: 'center',
        marginTop: 24,
    },
    textInputOTP: {
        width: 350,
        height: 50,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 2,
        alignContent: 'center',
        paddingHorizontal: 20,
        fontSize: 16,
        borderWidth: 0.1,
    },
    textPhone: {
        lineHeight: 25,
    },
    textOTP: {
        fontSize: 18,
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'rgba(253,253,253,10)',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    modalBackGround: {
        backgroundColor: 'rgba(253,253,253,0.5)',
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
    },
    textRegister: {
        fontSize: 14,
        color: 'blue',
    },
    textLoginGmail: {
        marginLeft: '15%',
        fontSize: 15,
        color: '#2D2626',
    },
    loginGoogle: {
        width: 230,
        height: 65,
        borderRadius: 10,
        paddingHorizontal: '5%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    lien: {
        marginTop: 7,
        marginHorizontal: 20,
    },
    or: {
        paddingLeft: 20,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    loginContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 32,
    },
    Ellip: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: 47,
        height: 47,
        borderRadius: 52,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    image: {
        marginTop: 42,
    },
    gradients1: {
        position: 'absolute',
        width: 157,
        height: 10,
        backgroundColor: '#DD4455',
    },
    gradients: {
        position: 'absolute',
        width: 157,
        height: 10,
        backgroundColor: '#DD4455',
    },
    textButtomLogin: {
        fontSize: 18,
        lineHeight: 50,
        alignItems: 'center',
        color: '#FFFFFF',
    },
    buttomLogin: {
        width: '88%',
        height: 59,
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#DD4455',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    textRemember: {
        lineHeight: 23,
        color: '#2D2626',
        marginTop: 22,
        marginLeft: '57%',
    },
    textInput2: {
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '600',
        backgroundColor: '#F3F3F3',
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
        borderRadius: 10,
        width: '88%',
        fontSize: 16,
        height: 59,
        fontWeight: '600',
        backgroundColor: '#F3F3F3',
        // color: 'black',
        marginTop: 32,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    textWelcomLogin: {
        lineHeight: 45,
        color: '#464444',
    },
    textDescribe: {
        marginTop: 12,
    },
    iconLogin: {
        marginTop: 32,
        width: 25,
        height: 25,
        marginHorizontal: 10,
    },
    iconLogo: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
});
