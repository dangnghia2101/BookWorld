/* eslint-disable react-native/no-inline-styles */
import {icons} from '@assets';
import {Block, Icon, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useState} from 'react';
import {Image, Pressable, TextInput} from 'react-native';
import styles from './styles';

const InputText = ({
  setRef,
  iconLeft,
  iconRight,
  placeholder,
  keyboardType,
  onChangeText,
  onChange,
  value,
  style,
  containerStyle,
  inputStyle,
  isSecure,
  isError,
  errorText,
  errorContainerStyle,
  errorTextStyles,
  onFocus,
  returnKeyType,
  onSubmitEditing,
  colorErr,
  colorNotErr,
}) => {
  const [secureEye, setSecureEye] = useState(true);
  const ColorErr = colorErr || theme.colors.red;
  const ColorNotErr = colorNotErr || theme.colors.smoke;

  const _renderSecureIcon = () => {
    return (
      <Pressable
        style={{...styles.iconLeft, marginRight: getSize.m(5)}}
        hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
        onPress={() => setSecureEye(!secureEye)}>
        <Icon
          type="FontAwesome"
          name={secureEye ? 'eye' : 'eye-slash'}
          size={15}
        />
      </Pressable>
    );
  };

  const _renderError = () => (
    <Block
      row
      alignCenter
      paddingVertical={5}
      paddingHorizontal={15}
      style={errorContainerStyle}>
      <Image
        source={icons.warning}
        resizeMode="contain"
        style={styles.icoWarning}
      />
      <Text
        style={errorTextStyles}
        marginLeft={5}
        size={11}
        color={theme.colors.red}>
        {errorText}
      </Text>
    </Block>
  );

  return (
    <Block style={containerStyle}>
      <Block
        row
        flex
        alignCenter
        paddingHorizontal={12}
        radius={45}
        backgroundColor="white"
        borderWidth={0.5}
        borderColor={isError ? ColorErr : ColorNotErr}
        style={style}>
        {iconLeft && (
          <Image
            source={iconLeft}
            resizeMode="contain"
            style={{
              ...styles.iconLeft,
              tintColor: isError ? theme.colors.red : theme.colors.lightGray,
            }}
          />
        )}
        <TextInput
          ref={setRef}
          style={{
            flex: 1,
            height: '100%',
            color: 'black',
            ...inputStyle,
          }}
          secureTextEntry={secureEye && isSecure}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={theme.colors.placeholder}
          value={value}
          onChangeText={text => onChangeText(text)}
          onFocus={onFocus}
          onChange={onChange}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
        {isSecure ? _renderSecureIcon() : iconRight && iconRight()}
      </Block>
      {isError && Boolean(errorText) && _renderError()}
    </Block>
  );
};

export default InputText;
