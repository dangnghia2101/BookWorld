import React from 'react';
import {Text, StyleSheet} from 'react-native';
import IconView from '@components/Icon';
import Button from '@components/Button';
import {theme} from '@theme';

const ItemFeature = ({
  title,
  iconComponent,
  iconName,
  iconColor,
  colorTitle,
  onPress,
}) => {
  return (
    <Button onPress={onPress} style={styles.boxItem}>
      <IconView
        component={iconComponent}
        name={iconName}
        color={iconColor}
        size={24}
      />
      <Text
        style={[
          styles.text,
          {color: colorTitle ? colorTitle : theme.colors.black},
        ]}>
        {title}
      </Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  boxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  text: {
    paddingVertical: 15,
    marginLeft: 20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    width: '100%',
  },
});
export default ItemFeature;
