import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Block, HeaderWithButton } from '@components';
import { theme } from '@theme';
import IconView from '@components/Icon';
import { useAppSelector } from '@hooks';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const createFormData = (photo, name) => {
    const data = new FormData();

    data.append('photo', {
        name: photo.fileName,
        type: photo.type,
        uri: Platform.OS === 'ios' ? photo.replace('file://', '') : photo,
    });

    data.append('name', name);

    return data;
};

const ScreenUpdateProfile = () => {
    const myInfo = useAppSelector(state => state.root.auth);
    const [imageUri, setImageUri] = useState(myInfo.image);
    const [name, setName] = useState(myInfo.name);
    const inset = useSafeAreaInsets();
    const snapPoints = useMemo(() => [260 + inset.bottom], [inset.bottom]);
    const bottomSheetRef = useRef(null);
    var snapTI = -1;
    // const renderBackdrop = useCallback(
    //     props => (
    //         <BottomSheetBackdrop
    //             disappearsOnIndex={-1}
    //             appearsOnIndex={0}
    //             {...props}
    //             enableTouchThrough={true}
    //         />
    //     ),
    //     [],
    // );

    const options = {
        saveToPhotos: true,
        mediaType: 'photo',
    };

    const chooseImageGallary = async () => {
        const result = await launchImageLibrary(options);
        setImageUri(result.assets[0].uri);
    };

    const takePhoto = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            setImageUri(result.assets[0].uri);
            if (snapTI == 0) {
                snapTI = -1;
                bottomSheetRef.current?.snapToIndex(snapTI);
            } else {
                snapTI = 0;
                bottomSheetRef.current?.snapToIndex(snapTI);
            }
        }
    };

    const handleUploadPhoto = () => {
        fetch(`https://bookworlddasboard.herokuapp.com/api/accounts/getChangeProfile`, {
            method: 'POST',
            body: createFormData(imageUri, name),
            headers: new Headers({
                'Authorization': 'Bearer ' + myInfo.token,
                'Content-Type': 'multipart/form-data;application/json; charset=utf-8'
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => {
                console.log('error', error);
            });
        setName('');
    };

    return (
        <Block flex paddingHorizontal={40} backgroundColor={theme.colors.white}>
            <HeaderWithButton isBackHeader title={'Chỉnh sửa thông tin'} />
            <ScrollView>
                <Block width={150} marginTop={30} marginBottom={50} marginLeft={100} relative>
                    <Block
                        relative
                        backgroundColor={theme.colors.white}
                        width={150}
                        height={150}
                        radius={100}
                        justifyCenter
                        alignCenter
                        padding={7}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: imageUri }} />
                        <Block
                            absolute
                            width={40}
                            height={40}
                            radius={50}
                            backgroundColor={'#FDFDFD'}
                            opacity={0.7}
                            justifyCenter
                            alignCenter>
                            <TouchableOpacity
                                onPress={() => bottomSheetRef.current?.snapToIndex(0)}>
                                <IconView
                                    component={'SimpleLineIcons'}
                                    name={'pencil'}
                                    size={32}
                                    color={theme.colors.pinkRed}
                                />
                            </TouchableOpacity>
                        </Block>
                    </Block>
                </Block>
                <Block
                    width={'100%'}
                    marginTop={20}>
                    <Text style={styles.textFullname}>Họ tên</Text>
                    <TextInput onChangeText={setName} value={name} placeholder={myInfo.name} placeholderTextColor={theme.colors.gray2} style={styles.textInput} />
                </Block>
                <Block
                    width={'100%'}
                    marginTop={20}>
                    <Text style={styles.textFullname}>Ngày sinh</Text>
                    <TextInput placeholder={'dd/mm/yyyy'} placeholderTextColor={theme.colors.gray2} style={styles.textInput} />
                </Block>
                <TouchableOpacity
                    onPress={handleUploadPhoto}
                    style={styles.TouchableOpacity} >
                    <Text style={styles.textSave} height={55}>
                        Lưu
                    </Text>
                </TouchableOpacity>
                <BottomSheet
                    style={styles.bottomSheet}
                    index={-1}
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}>
                    <Block width={'100%'} borderWidth={1} borderColor={theme.colors.creamRed} height={'100%'} justifyCenter alignCenter>
                        <TouchableOpacity style={styles.buttomLogin}
                            onPress={() => takePhoto()}>
                            <Text style={styles.textButtomLogin}>Chụp ảnh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttomLogin}
                            onPress={() => chooseImageGallary()}>
                            <Text style={styles.textButtomLogin}>Chọn sẵn có</Text>
                        </TouchableOpacity>
                    </Block>
                </BottomSheet>
            </ScrollView>
        </Block>


    );
};

export default ScreenUpdateProfile;

const styles = StyleSheet.create({
    textFullname: {
        color: theme.colors.text,
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 10
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
        width: '70%',
        height: 59,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
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
    textSave: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
    },
    TouchableOpacity: {
        width: '100%',
        height: 55,
        backgroundColor: theme.colors.creamRed,
        borderRadius: 50,
        marginTop: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
        color: theme.colors.text,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray2
    },
    avatar: {
        width: 135,
        height: 135,
        borderRadius: 100,
        margin: 7,
    },
});
