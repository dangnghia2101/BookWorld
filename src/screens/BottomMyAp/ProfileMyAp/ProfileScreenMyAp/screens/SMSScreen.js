import React, {useCallback, useEffect} from 'react';
import HeaderWithButton from '@components/HeaderWithButton';
import actions from '@redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import ItemSMS from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/components/ItemSMS';
import {Block, Text} from '@components';
import {CustomToast} from '@utils/helper';
import {Share} from 'react-native';
const SMSScreen = ({route}) => {
  const {title} = route?.params;
  const dispatch = useDispatch();
  const listSms = useSelector(state => state.smsReducer.data);
  const onCopy = useCallback(async phoneNumber => {
    try {
      const result = await Share.share({
        message: phoneNumber,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      CustomToast(error.message);
    }
  }, []);
  useEffect(() => {
    dispatch({type: actions.GET_LIST_PHONE});
  }, [dispatch]);
  return (
    <Block flex>
      <HeaderWithButton title={title} isBackHeader={true} />
      {listSms && listSms.length > 0 ? (
        listSms.map((item, index) => {
          return <ItemSMS copyPhoneNumber={onCopy} item={item} key={index} />;
        })
      ) : (
        <Block alignCenter justifyCenter flex>
          <Text center>Không có dữ liệu!</Text>
        </Block>
      )}
    </Block>
  );
};
export default SMSScreen;
