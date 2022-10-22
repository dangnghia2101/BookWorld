import {useStripe, BillingDetails, CardForm} from '@stripe/stripe-react-native';
import React from 'react';
import {Block, Text} from '@components';
import {TouchableOpacity} from 'react-native';
import {useTheme} from 'themeNew';
import {useAppSelector} from '@hooks';
import {useCreatePaymentMutation} from '@redux/servicesNew';

export default function PaymentScreen() {
  const {confirmPayment} = useStripe();

  const [createPayment] = useCreatePaymentMutation();

  const themeStore = useAppSelector(state => state.root.themeApp.theme);

  const colors = useTheme(themeStore);

  const amount = 10000; //So tien tong bill thanh toan
  const billingDetails: BillingDetails = {
    email: 'NameEmail@gmail.com',
    phone: '097888888',
    name: 'Nguyen Van A',
  };

  const initPayment = async () => {
    const sentData = {
      amount: amount,
      currency: 'usd',
      paymentMethod: 'card',
    };

    const response = await createPayment(sentData);

    if (response.data) {
      const clientSecret = response.data.clientSecret;
      const {error, paymentIntent} = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails,
        },
      });

      if (error) {
        console.log('Payment failued ', error);
      } else {
        console.log('Payment success ', paymentIntent);
      }
    } else {
      console.log('Intent server not responding correcdly...');
    }
  };

  return (
    <Block alignCenter>
      <Block marginRight={270} marginVertical={10}>
      <Text size={16}>100.000đ</Text>
      </Block>
      <CardForm
        cardStyle={{
          backgroundColor: colors.colors.Orange,
          textColor: 'black',
          fontSize: 16,
          borderRadius: 20,
          cursorColor: colors.colors.blue,
          placeholderColor: colors.colors.black,
        }}
        style={{
          width: '90%',
          height: 270,
        }}
        onFormComplete={cardDetails => {
          console.log(cardDetails);
        }}
      />
      <TouchableOpacity onPress={initPayment} style={{width: '88%'}}>
        <Block
          width={'100%'}
          height={50}
          marginTop={20}
          justifyCenter
          alignCenter
          backgroundColor={colors.colors.blue}
          radius={15}>
          <Text size={16} color="white">Pay now</Text>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}
