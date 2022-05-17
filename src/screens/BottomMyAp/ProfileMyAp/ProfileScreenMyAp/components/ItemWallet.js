import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IconView from '@components/Icon';
import {NameIconComponents} from '@components/Icon/config';

const ItemWallet = ({nameWallet, iconColor, amountWallet, style}) => {
  return (
    <View style={[styles.ViewItemContent, style]}>
      <IconView
        component={NameIconComponents.MaterialCommunityIcons}
        name={'wallet'}
        size={40}
        color={iconColor}
      />
      <Text style={styles.textBold}>{amountWallet} đ</Text>
      <Text style={styles.textContent}>{nameWallet}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ViewItemContent: {
    backgroundColor: 'white',
    margin: 4,
    padding: 10,
    flex: 1,
    minWidth: '40%',
    borderRadius: 8,
    alignItems: 'center',
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#635a6e',
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
  },
  textContent: {
    fontStyle: 'italic',
    color: 'black',
  },
});
export default ItemWallet;
