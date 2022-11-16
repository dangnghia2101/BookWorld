import {
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
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
import { useEditProfileMutation } from '@redux/servicesNew/editProflieAPI';
import { width } from '@utils/responsive';

const createFormData = (photo, name) => {
    console.log('createFormDataaaaaaa', photo);
    const data = new FormData();
    data.append('file', {
        name: photo.fileName,
        type: photo.type,
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });
    data.append('name', name);
    return data;
};

const ScreenUpdateProfile = () => {
    const myInfo = useAppSelector(state => state.root.auth);
    console.log('myInfooooooo', myInfo.image)
    const [imageUri, setImageUri] = useState(myInfo.image);
    const [name, setName] = useState(myInfo.name);
    const [editProfile] = useEditProfileMutation();
    const inset = useSafeAreaInsets();
    const snapPoints = useMemo(() => [260 + inset.bottom], [inset.bottom]);
    const bottomSheetRef = useRef(null);
    var snapTI = -1;
    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                {...props}
                enableTouchThrough={true}

            />
        ),
        [],
    );

    const options = {
        saveToPhotos: true,
        mediaType: 'photo',
        maxWidth: 500,
        maxHeigth: 500
    };

    const chooseImageGallary = async () => {
        const result = await launchImageLibrary(options);
        setImageUri({ uri: result.assets[0].uri, name: result.assets[0].fileName, type: result.assets[0].type });
    };

    const takePhoto = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            // setImageUri({ uri: result.assets[0].uri, name: result.assets[0].fileName, type: result.assets[0].type });
            setImageUri(result.assets[0].uri);
            // console.log("takePhoto result =", result)

            if (snapTI == 0) {
                // snapTI = -1;
                bottomSheetRef.current?.snapToIndex(-1);
            }

        }
    };

    const handleUploadPhoto = async () => {
        const body = { formData: createFormData(imageUri, name), token: myInfo.token };
        // const aw = await editProfile(body);
        var url = "https://bookworlddasboard.herokuapp.com/api/accounts/getChangeProfile";

        let res = await fetch(url, {
            method: "POST",
            body: body.formData,
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${myInfo.token}`
            }
        });
        let responseJson = await res.json();
        if (responseJson.status.response == "success") {
            Alert.alert("Profile picture updated Successful");
        } else {
            Alert.alert("Something went wrong, please try again");
        }
        console.log("handleUploadPhoto", body)
    };

    return (
        <Block flex backgroundColor={theme.colors.white}>
            <HeaderWithButton isBackHeader title={'Chỉnh sửa thông tin'} />
            <ScrollView>
                <Block width={150} marginTop={30} marginBottom={50} marginLeft={135} relative>
                    <Block
                        relative
                        backgroundColor={theme.colors.white}
                        width={150}
                        height={150}
                        radius={100}
                        justifyCenter
                        alignCenter
                        padding={7}>
                        <Block
                            backgroundColor={theme.colors.white}
                            width={155}
                            height={155}
                            radius={100}
                            justifyCenter
                            alignCenter
                            borderColor={theme.colors.gray2}
                            borderWidth={1.5}
                            padding={7}>
                            <Image
                                style={styles.avatar}
                                source={{ uri: imageUri }} />
                            <Block
                                absolute
                                width={35}
                                height={35}
                                radius={50}
                                left={90}
                                top={105}
                                backgroundColor={theme.colors.white}
                                justifyCenter
                                alignCenter>
                                <TouchableOpacity
                                    style={styles.iconPen}
                                    onPress={() => bottomSheetRef.current?.snapToIndex(0)}>
                                    <IconView
                                        component={'SimpleLineIcons'}
                                        name={'pencil'}
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </Block>
                        </Block>

                    </Block>
                </Block>
                <Block
                    width={'100%'}
                    paddingHorizontal={30}>
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
                </Block>

            </ScrollView>
            <BottomSheet
                style={styles.bottomSheet}
                index={snapTI}
                ref={bottomSheetRef}
                renderBackdrop={renderBackdrop}
                snapPoints={snapPoints}
                enablePanDownToClose={true}>
                <Block width={'100%'} row justifyCenter alignCenter height={'100%'} >
                    <TouchableOpacity style={styles.buttomLogin}
                        onPress={() => takePhoto()}>
                        <IconView
                            component={'Ionicons'}
                            name={'camera-outline'}
                            size={50}
                        />
                        <Text style={styles.textButtomLogin}>Chụp ảnh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttomLogin}
                        onPress={() => chooseImageGallary()}>
                        <IconView
                            component={'FontAwesome'}
                            name={'picture-o'}
                            size={50}
                        />
                        <Text style={styles.textButtomLogin}>Chọn ảnh</Text>
                    </TouchableOpacity>
                </Block>
            </BottomSheet>
        </Block>
    );
};

export default ScreenUpdateProfile;

const styles = StyleSheet.create({
    bottomSheet: {
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textFullname: {
        color: theme.colors.text,
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 10
    },
    textButtomLogin: {
        fontSize: 12,
        // lineHeight: 50,
        alignItems: 'center',
        fontWeight: '700',
        color: theme.colors.text,
    },
    buttomLogin: {
        width: '35%',
        height: '40%',
        marginLeft: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.gray2,

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
        marginTop: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
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
