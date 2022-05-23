import React, {useState, useEffect} from 'react';
import {Block, Button} from '@components';
import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  NativeModules,
  Platform,
} from 'react-native';
import {theme} from '@theme';
import IconView from '@components/Icon';
import {useNavigation, useRoute} from '@react-navigation/native';

const Header = ({themeBack, setThemeBack, size, setSize}) => {
  const [paddingTop, setPaddingTop] = useState(0);
  const [height, setHeight] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      NativeModules.StatusBarManager.getHeight(statusBarHeight => {
        const STATUS_BAR_HEIGHT = statusBarHeight.height;
        const HEIGHT = 60 + STATUS_BAR_HEIGHT;
        setPaddingTop(STATUS_BAR_HEIGHT);
        setHeight(HEIGHT);
      });
    } else {
      const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
      const HEIGHT = 60 + STATUS_BAR_HEIGHT;
      setPaddingTop(STATUS_BAR_HEIGHT);
      setHeight(HEIGHT);
    }
  }, []);

  return (
    <Block
      backgroundColor={themeBack ? theme.colors.white : theme.colors.dark2}
      height={height}
      paddingTop={paddingTop}
      paddingHorizontal={10}
      justifyCenter
      style={styles.shadow}>
      <Block row style={styles.container} space={'between'}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}>
          <IconView
            component={'MaterialIcons'}
            name="keyboard-backspace"
            size={30}
            color={!themeBack ? theme.colors.white : theme.colors.dark2}
          />
        </TouchableOpacity>
        <Block row>
          <Button onPress={() => setSize(size + 2)} style={{marginRight: 20}}>
            <IconView
              component={'AntDesign'}
              name={'pluscircleo'}
              size={25}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}
            />
          </Button>
          <Button onPress={() => setSize(size - 2)}>
            <IconView
              component={'AntDesign'}
              name={'minuscircleo'}
              size={25}
              color={!themeBack ? theme.colors.white : theme.colors.dark2}
            />
          </Button>
        </Block>

        <Button onPress={() => setThemeBack(!themeBack)}>
          <IconView
            component={'Ionicons'}
            name={themeBack ? 'ios-sunny-outline' : 'moon-outline'}
            size={25}
            color={!themeBack ? theme.colors.white : theme.colors.dark2}
          />
        </Button>
      </Block>
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
  shadow: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.gray2,
  },
});

export default Header;
