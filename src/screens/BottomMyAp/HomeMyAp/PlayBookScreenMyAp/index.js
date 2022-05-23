import React, {useState, useRef, useEffect} from 'react';
import {Block, Text} from '@components';
import {WebView} from 'react-native-webview';
import Header from './components/Header';

import {theme} from '@theme';

const PlayBookScreenMyAp = ({route}) => {
  const webref = useRef(null);
  const [themeBack, setThemeBack] = useState(true); //True background white
  const [size, setSize] = useState(50);

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
      <Header
        themeBack={themeBack}
        setThemeBack={setThemeBack}
        size={size}
        setSize={setSize}
      />
      <WebView
        source={{
          uri: 'https://www.gutenberg.org/files/68149/68149-h/68149-h.htm',
        }}
        onMessage={event => {}}
        injectedJavaScript={initailStyle}
        ref={webref}
      />
    </Block>
  );
};

export default PlayBookScreenMyAp;
