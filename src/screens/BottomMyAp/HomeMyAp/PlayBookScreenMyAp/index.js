import React, {useState, useRef, useEffect} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {Block, Text} from '@components';
import {WebView} from 'react-native-webview';
import Header from './components/Header';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EvaluateBook from '../DetailBookScreenMyAp/components/EvaluateBook';

import {theme} from '@theme';
import {routes} from '@navigation/routes';

const height = Dimensions.get('window').height;

const PlayBookScreenMyAp = ({route}) => {
  const webref = useRef(null);
  const [themeBack, setThemeBack] = useState(true); //True background white
  const [size, setSize] = useState(50);
  const [scrollY, setScrollY] = useState(0.00000001);
  const [scrollYSize, setScollYSize] = useState(0.00001);
  const [heightWebView, setHeightWebView] = useState(height - 250);

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

  // Dinh dang ban dau
  const initailStyle = `
    document.body.style.marginLeft = '5%'
    document.body.style.marginRight = '5%' 
    document.querySelectorAll("p, div, td").forEach(item => {
      item.style.fontSize = "${size}px";
      item.style.fontFamily  = Arial, Helvetica, sans-serif;
    });
    document.querySelectorAll("span").forEach(item => {
      item.style.display = "none";
    });
  `;

  // Doi mau background
  useEffect(() => {
    if (themeBack === true) {
      webref.current.injectJavaScript(backgroundWhite);
    } else {
      webref.current.injectJavaScript(backgroundBlack);
    }
  }, [themeBack]);

  // Doi kich co chu
  useEffect(() => {
    webref.current.injectJavaScript(changeSize);
  }, [size]);

  return (
    <Block
      backgroundColor={themeBack ? theme.colors.white : theme.colors.dark2}
      height={'100%'}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Header
          themeBack={themeBack}
          setThemeBack={setThemeBack}
          size={size}
          setSize={setSize}
          _idBook={route.params.item._id}
          scrollY={scrollY}
          scrollYSize={scrollYSize}
        />
        <WebView
          style={{height: heightWebView}}
          source={{
            uri: 'https://www.gutenberg.org/files/68149/68149-h/68149-h.htm',
          }}
          onMessage={event => {}}
          injectedJavaScript={initailStyle}
          ref={webref}
          onScroll={syntheticEvent => {
            const {contentOffset, contentSize} = syntheticEvent.nativeEvent;
            setScrollY(contentOffset.y);
            setScollYSize(Math.floor(contentSize.height));
            scrollY / scrollYSize >= 0.98
              ? setHeightWebView(100)
              : setHeightWebView(height - 250);
            console.log(
              '============> ',
              scrollY,
              ' ',
              scrollYSize,
              ' ',
              scrollY / scrollYSize,
            );
          }}
        />

        <Block
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          backgroundColor={theme.colors.gray4}
          height={40}
          justifyCenter
          alignCenter
          row>
          <Progress.Bar
            color={theme.colors.red}
            height={6}
            progress={scrollY / scrollYSize}
            width={260}
          />
          <Text marginLeft={10} fontType={'bold'}>
            {Math.floor((scrollY / scrollYSize) * 100)}%
          </Text>
        </Block>
        {heightWebView <= 200 ? <EvaluateBook /> : null}
      </ScrollView>
    </Block>
  );
};

export default PlayBookScreenMyAp;
