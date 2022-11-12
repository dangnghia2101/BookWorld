import { Block, Button, HeaderWithButton, Text } from '@components';
import IconView from '@components/Icon';
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useAppSelector } from '@hooks';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { useTheme } from 'themeNew';
import EvaluateBook from '../DetailBookScreenMyAp/components/EvaluateBook';
import { BackHandler, Alert } from 'react-native';
import { useCreateTimeReadMutation } from '@redux/servicesNew';


const PlayBookScreenMyAp = ({ route }) => {
  const { htmlChapter, title, image, price, _id } = route.params;
  const webref = useRef(null);
  const [themeBack, setThemeBack] = useState(true); //True background white
  const [size, setSize] = useState(16);
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);
  const inset = useSafeAreaInsets();
  const snapPoints = useMemo(() => [300 + inset.bottom], [inset.bottom]);
  const snapPoints2 = useMemo(() => [700 + inset.bottom], [inset.bottom]);
  const bottomSheetRef = useRef(null);
  const bottomSheetCommetnRef = useRef(null);
  var snapTI = -1;
  const [createTimeRead, { isLoading, data, error }] = useCreateTimeReadMutation();
  const timeStart = new Date();

  const myInfo = useAppSelector(state => state.root.auth);

  console.log("start: ", timeStart);

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

  const renderRightIconHeader = () => (
    <Button
      onPress={changBottomSheet}>
      <IconView
        component={'Entypo'}
        name={'dots-three-vertical'}
        size={20}
        color={theme.colors.textInBox}
      />
    </Button>
  );
  const changBottomSheet = () => {
    if (snapTI == 0) {
      snapTI = -1;
      bottomSheetRef.current?.snapToIndex(snapTI);
      bottomSheetCommetnRef.current?.snapToIndex(0);
    } else {
      snapTI = 0;
      bottomSheetRef.current?.snapToIndex(snapTI);
    }
  }

  const initailStyle = `
  document.body.style.marginLeft = '5%'
  document.body.style.marginRight = '5%' 
  document.querySelectorAll("p, div, td").forEach(item => {
    item.style.fontSize = "${size}px";
  });
  document.querySelectorAll("span").forEach(item => {
    item.style.display = "none";
  });
`;

  const backgroundBlack = `
  document.body.style.background = "${theme.colors.dark2}";
  document.querySelectorAll("p, div, td").forEach(item => {
    item.style.color = '${theme.colors.gray4}';
  });`;

  const backgroundWhite = `
  document.body.style.background = "${theme.colors.white}";
  document.querySelectorAll("p, div, td").forEach(item => {
    item.style.color = '${theme.colors.dark2}';
  });`;

  const changeSize = `
    document.querySelectorAll("p, div, td").forEach(item => {
    item.style.fontSize = "${size}px";
  });`;

  useEffect(() => {
    if (themeBack === true) {
      webref.current.injectJavaScript(backgroundWhite);
    } else {
      webref.current.injectJavaScript(backgroundBlack);
    }
  }, [backgroundBlack, backgroundWhite, themeBack]);

  useEffect(() => {
    webref.current.injectJavaScript(changeSize);
  }, [changeSize, size]);

  const endReadBook = async () => {
    const timeEnd = new Date();
    const sumTimeReadBook = Math.floor((timeEnd - timeStart) / 1000);
    const params = {
      time: sumTimeReadBook,
      token: myInfo.token
    };

    console.log("end: ", timeEnd);
    console.log("sum time read:", sumTimeReadBook);

    const respon = await createTimeRead(params);
    console.log("respon: ", respon);
  };

  useEffect(() => {
    const backHandler = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "YES",
          onPress: () => {
            BackHandler.exitApp();
            endReadBook();
          }
        }
      ]);
      return true;

    };

    const backHandlerEvent = BackHandler.addEventListener(
      "hardwareBackPress",
      backHandler
    );

    return () => backHandlerEvent.remove()

  }, [])


  const renderHtml = useCallback(() => {
    return (
      <WebView
        ref={webref}
        scalesPageToFit={false}
        injectedJavaScript={initailStyle}
        originWhitelist={['*']}
        source={{ html: htmlChapter }}
      />
    );
  }, [htmlChapter, initailStyle]);

  return (
    <Block backgroundColor={theme.colors.text} style={{ flex: 1 }}>
      <HeaderWithButton
        handleBack={endReadBook}
        title={title}
        isBackHeader
        rightIcon={renderRightIconHeader()}
      />

      {renderHtml()}

      {/* {renderHtml()} */}
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}>
        <Block
          backgroundColor={!themeBack ? theme.colors.black : theme.colors.white}
          borderWidth={!themeBack ? 1 : 0}
          borderColor={!themeBack ? theme.colors.white : theme.colors.red}
          paddingHorizontal={10}>
          <Text center size={18} fontType={'bold'} color={theme.colors.grey4}>
            Cài đặt
          </Text>
          <Block
            borderBottomWidth={1}
            borderBottomColor={theme.colors.grey14}
            marginTop={15}
          />
          <Button row style={[styles.rowModal]}>
            <IconView
              component={'MaterialIcons'}
              name={true ? 'favorite' : 'favorite-border'}
              size={20}
              color={themeBack ? theme.colors.red : theme.colors.white}
            />
            <Text
              style={styles.textRowModal}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}>
              {true ? 'Lưu sách yêu thích ' : 'Đã lưu'}
            </Text>
          </Button>

          {/* Che do ban ngay */}
          <Button
            row
            style={[styles.rowModal]}
            onPress={() => setThemeBack(!themeBack)}>
            <IconView
              component={'Ionicons'}
              name={themeBack ? 'ios-sunny-outline' : 'moon-outline'}
              size={20}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}
            />
            <Text
              style={styles.textRowModal}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}>
              {themeBack ? 'Chế độ ban ngày' : 'Chế độ ban đêm'}
            </Text>
          </Button>

          <Button
            row
            style={[styles.rowModal]}
            onPress={() => setSize(size + 2)}>
            <IconView
              component={'AntDesign'}
              name={'plus'}
              size={20}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}
            />
            <Text
              style={styles.textRowModal}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}>
              Tăng kích cỡ chữ
            </Text>
          </Button>

          <Button
            row
            style={[styles.rowModal]}
            onPress={() => setSize(size - 2)}>
            <IconView
              component={'AntDesign'}
              name={'minus'}
              size={22}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}
            />
            <Text
              style={styles.textRowModal}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}>
              Giảm kích cỡ chữ
            </Text>
          </Button>

          <Button
            row
            style={[styles.rowModal]}
            onPress={changBottomSheet}>
            <IconView
              component={'EvilIcons'}
              name={'comment'}
              size={22}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}
            />
            <Text
              style={styles.textRowModal}>
              Bình luận
            </Text>
          </Button>

        </Block>
      </BottomSheet>
      <BottomSheet
        index={-1}
        ref={bottomSheetCommetnRef}
        snapPoints={snapPoints2}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}>
        <BottomSheetScrollView>
          <EvaluateBook idChapter={_id} />
        </BottomSheetScrollView>
      </BottomSheet>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    alignItems: 'center',
    justifyCenter: 'center',
    padding: 5,
  },
  textHeader: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
    flex: 1,
    fontWeight: 'bold',
  },
  containerModal: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  rowModal: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textRowModal: {
    fontSize: 15,
    marginLeft: 10,
  },
});

export default PlayBookScreenMyAp;
