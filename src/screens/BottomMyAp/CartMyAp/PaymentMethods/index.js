import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Block, Text, PaymentScreen} from '@components';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const PaymentMethods = () => {
  const navigation = useNavigation();
  return (
    <Block marginTop={40}>
      <PaymentScreen />
    </Block>
    // <Block marginTop={40}>
    //   <Block row marginLeft={25}>
    //     <TouchableOpacity
    //       onPress={() => {
    //         navigation.goBack();
    //       }}>
    //       <Image
    //         marginTop={5}
    //         source={require('../../../../assets/icons/goBack.png')}
    //       />
    //     </TouchableOpacity>
    //     <Text size={20} marginLeft={40}>
    //       Phương thức thanh toán
    //     </Text>
    //   </Block>
    //   <Block>
    //     <Text marginTop={15} marginLeft={35} color="#818181">
    //       Phương thức khuyên dùng
    //     </Text>
    //     <TouchableOpacity
    //       style={styles.AllPay}
    //       row
    //       marginTop={10}
    //       marginLeft={10}
    //       justifyContent={'space-between'}>
    //       <Block row style={styles.Pay}>
    //         <Block row>
    //           <Image
    //             marginTop={20}
    //             style={styles.icon}
    //             source={require('../../../../assets/icons/logo.png')}
    //           />
    //           <Block>
    //             <Text style={styles.text} marginLeft={10} marginTop={10}>
    //               Tài khoản Bookword
    //             </Text>
    //             <Text color="#818181" marginLeft={10} marginTop={5}>
    //               Thanh toán nhanh chóng dễ dàng
    //             </Text>
    //           </Block>
    //         </Block>
    //         <Block>
    //           <Image
    //             marginTop={15}
    //             marginRight={10}
    //             source={require('../../../../assets/icons/next.png')}
    //           />
    //         </Block>
    //       </Block>
    //     </TouchableOpacity>
    //   </Block>
    //   <Block>
    //     <Text marginTop={15} marginLeft={35} color="#818181">
    //       Phương thức thanh toán khác
    //     </Text>
    //     <TouchableOpacity
    //       style={styles.AllPay}
    //       row
    //       marginTop={10}
    //       marginLeft={10}
    //       justifyContent={'space-between'}>
    //       <Block row style={styles.Pay}>
    //         <Block row>
    //           <Image
    //             marginTop={15}
    //             style={styles.icon}
    //             source={require('../../../../assets/icons/zaloPay.png')}
    //           />
    //           <Block>
    //             <Text style={styles.text} marginLeft={10} marginTop={10}>
    //               Ví Zalo Pay
    //             </Text>
    //             <Text color="#818181" marginLeft={10} marginTop={5}>
    //               ******1513
    //             </Text>
    //           </Block>
    //         </Block>
    //         <Block>
    //           <TouchableOpacity style={styles.checkBox} />
    //         </Block>
    //       </Block>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       style={styles.AllPay}
    //       row
    //       marginTop={10}
    //       marginLeft={10}
    //       justifyContent={'space-between'}>
    //       <Block row style={styles.Pay}>
    //         <Block row>
    //           <Image
    //             marginTop={15}
    //             style={styles.icon}
    //             source={require('../../../../assets/icons/momo.png')}
    //           />
    //           <Block>
    //             <Text style={styles.text} marginLeft={10} marginTop={10}>
    //               Ví Zalo Pay
    //             </Text>
    //             <Text color="#818181" marginLeft={10} marginTop={5}>
    //               ******1513
    //             </Text>
    //           </Block>
    //         </Block>
    //         <Block>
    //           <TouchableOpacity style={styles.checkBox} />
    //         </Block>
    //       </Block>
    //     </TouchableOpacity>
    //   </Block>
    //   <Block>
    //     <Text marginTop={15} marginLeft={35} color="#818181">
    //       Tất cả phương thức thanh toán
    //     </Text>
    //     <TouchableOpacity
    //       style={styles.AllPay}
    //       row
    //       marginTop={10}
    //       marginLeft={10}
    //       justifyContent={'space-between'}>
    //       <Block row style={styles.Pay}>
    //         <Block row>
    //           <Image
    //             marginTop={20}
    //             style={styles.icon1}
    //             source={require('../../../../assets/icons/credit.jpg')}
    //           />
    //           <Block>
    //             <Text style={styles.text} marginLeft={10} marginTop={10}>
    //               Thẻ tín dụng / thẻ ghi nợ
    //             </Text>
    //             <Text color="#818181" marginLeft={10} marginTop={5}>
    //               Thẻ tín dụng / thẻ ghi nợ
    //             </Text>
    //           </Block>
    //         </Block>
    //         <Block>
    //           <Image
    //             marginTop={15}
    //             marginRight={10}
    //             source={require('../../../../assets/icons/next.png')}
    //           />
    //         </Block>
    //       </Block>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.AllPay}
    //       row
    //       marginTop={10}
    //       marginLeft={10}
    //       justifyContent={'space-between'}>
    //       <Block row style={styles.Pay}>
    //         <Block row>
    //           <Image
    //             marginTop={20}
    //             style={styles.icon}
    //             source={require('../../../../assets/icons/viettelpay.png')}
    //           />
    //           <Block>
    //             <Text style={styles.text} marginLeft={10} marginTop={10}>
    //               Thẻ tín dụng / thẻ ghi nợ
    //             </Text>
    //             <Text color="#818181" marginLeft={10} marginTop={5}>
    //               Thẻ tín dụng / thẻ ghi nợ
    //             </Text>
    //           </Block>
    //         </Block>
    //         <Block>
    //           <Image
    //             marginTop={15}
    //             marginRight={10}
    //             source={require('../../../../assets/icons/next.png')}
    //           />
    //         </Block>
    //       </Block>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.AllPay}
    //       row
    //       marginTop={10}
    //       marginLeft={10}
    //       justifyContent={'space-between'}>
    //       <Block row style={styles.Pay}>
    //         <Block row>
    //           <Image
    //             marginTop={20}
    //             style={styles.icon1}
    //             source={require('../../../../assets/icons/napas.png')}
    //           />
    //           <Block>
    //             <Text style={styles.text} marginLeft={10} marginTop={10}>
    //               Thẻ tín dụng / thẻ ghi nợ
    //             </Text>
    //             <Text color="#818181" marginLeft={10} marginTop={5}>
    //               Thẻ tín dụng / thẻ ghi nợ
    //             </Text>
    //           </Block>
    //         </Block>
    //         <Block>
    //           <Image
    //             marginTop={15}
    //             marginRight={10}
    //             source={require('../../../../assets/icons/next.png')}
    //           />
    //         </Block>
    //       </Block>
    //     </TouchableOpacity>
    //   </Block>
    // </Block>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  checkBox: {
    width: 18,
    height: 18,
    borderWidth: 0.5,
    borderRadius: 9,
    marginTop: 15,
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 5,
  },
  icon1: {
    width: 36,
    height: 29,
    borderRadius: 5,
  },
  AllPay: {
    width: '95%',
    height: 70,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 10,
  },
  Pay: {
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
