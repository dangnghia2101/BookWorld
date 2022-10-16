import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Block } from '@components';
import { theme } from '@theme';
import IconView from '@components/Icon';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TopBar from '@screens/BottomMyAp/ReadingMyAp/components/TopBar';
const ScreenUpdateProfile = () => {
    const [imageUri, setImageUri] = useState('');
    const inset = useSafeAreaInsets();

    const snapPoints = useMemo(() => [260 + inset.bottom], [inset.bottom]);
    const bottomSheetRef = useRef(null);
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
    };
    const chooseImageGallary = async () => {
        const result = await launchImageLibrary(options);
        setImageUri(result.assets[0].uri);
    };
    return (
        <Block flex backgroundColor={theme.colors.white}>
            <TopBar headerTitle={'Chỉnh sửa thông tin'} />
            <Block width={150} marginTop={-60} marginLeft={140} relative>
                <Block
                    backgroundColor={theme.colors.white}
                    width={150}
                    height={150}
                    radius={100}
                    justifyCenter
                    alignCenter
                    padding={7}
                    borderWidth={5}
                    borderColor={theme.colors.creamRed}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: imageUri }}
                    />
                </Block>
                <Block
                    absolute
                    bottom={-5}
                    right={5}
                    width={40}
                    height={40}
                    radius={50}
                    justifyCenter
                    alignCenter
                    backgroundColor={theme.colors.white}
                >
                    <TouchableOpacity
                        onPress={() => bottomSheetRef.current?.snapToIndex(0)}>
                        <IconView
                            component={'AntDesign'}
                            name={'camerao'}
                            size={32}
                            color={theme.colors.pinkRed}
                        />
                    </TouchableOpacity>
                </Block>
            </Block>
            <Block
                width={'100%'}
                height={100}
                paddingHorizontal={24}
                marginTop={100}
                alignCenter>
                <Block
                    row
                    width={'100%'}
                    height={60}
                    radius={25}
                    alignCenter
                    marginBottom={30}
                    paddingHorizontal={10}
                    backgroundColor={theme.colors.blurGray}>
                    <IconView
                        component={'AntDesign'}
                        name={'user'}
                        size={32}
                        color={theme.colors.pinkRed}
                    />
                    <TextInput placeholder={'Họ tên...'} style={styles.textInput} />
                </Block>
                <Block
                    row
                    width={'100%'}
                    height={60}
                    radius={25}
                    alignCenter
                    paddingHorizontal={10}
                    backgroundColor={theme.colors.blurGray}>
                    <IconView
                        component={'AntDesign'}
                        name={'calendar'}
                        size={32}
                        color={theme.colors.pinkRed}
                    />
                    <TextInput placeholder={'dd/mm/yyyy'} style={styles.textInput} />
                </Block>
                <TouchableOpacity
                    style={styles.TouchableOpacity}
                >
                    <LinearGradient
                        style={styles.btnSave}
                        colors={['#CD58E0', '#DB4040']}>
                        <Text style={styles.textSave} height={55}>
                            Lưu
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Block>
            <BottomSheet
                style={styles.bottomSheet}
                index={-1}
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}>
                <Block width={'100%'} height={'100%'} justifyCenter alignCenter>
                    <TouchableOpacity style={styles.buttomLogin}>
                        <Text style={styles.textButtomLogin}>Chụp ảnh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttomLogin}
                        onPress={() => launchImageLibrary()}>
                        <Text style={styles.textButtomLogin}>Chọn sẵn có</Text>
                    </TouchableOpacity>
                </Block>
            </BottomSheet>
        </Block>
    );
};

export default ScreenUpdateProfile;

const styles = StyleSheet.create({

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
    btnSave: {
        width: '100%',
        height: '100%',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 7,
    },
    TouchableOpacity: {
        width: '50%',
        height: 55
    },
    textInput: {
        fontSize: 20,
        fontWeight: '500',
        color: '#898585',
        marginLeft: 10,
    },
    avatar: {
        width: 135,
        height: 135,
        borderRadius: 100,
        margin: 7,
    },
});