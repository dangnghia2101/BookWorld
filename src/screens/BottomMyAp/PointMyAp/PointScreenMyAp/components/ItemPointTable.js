import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// import moment from 'moment';
import Collapsible from 'react-native-collapsible';
// import DatePicker from 'react-native-date-picker';
// import PushNotification from 'react-native-push-notification';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {notification, removeNoti} from '@redux/reducers';
import ConfirmMessage from '../../components/ConfirmMessage';
import {theme} from '@theme';
import {Text, Block} from '@components';

const ItemPointTable = ({table}) => {
  const {colors} = theme;
  const [expanded, setExpanded] = React.useState(true);
  const [messgage, setMessgage] = useState('');
  // const {users} = useSelector(state => state.auths);

  const dispatch = useDispatch();
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // const {notis} = useSelector(state => state.notis);
  const [isShowModal, setIsShowModal] = useState(false);
  const onShowModal = () => {
    setIsShowModal(prev => !prev);
  };

  let check = false;

  return (
    <View style={styles.accordion}>
      {isShowModal && (
        <ConfirmMessage
          message={messgage}
          onShowModal={onShowModal}
          type="success"
        />
      )}
      {check && (
        <View style={styles.clock}>
          <Ionicons name="clockcircle" size={30} color={colors.white} />;
        </View>
      )}
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={toggleExpanded}>
          <View style={styles.box_content_item}>
            <View style={styles.box_left_title}>
              <Text size={14} colors={colors.text} fontType={'bold'}>
                {table.subject_semestor}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={2}
                color={colors.text}
                style={styles.text_bottom}>
                {table.subject_session}
              </Text>
            </View>
            <View style={{flex: 2}}>
              <Text
                numberOfLines={2}
                color={colors.text}
                style={styles.text_bottom}>
                {table.subject_name}
              </Text>
            </View>

            <View style={styles.viewIcon}>
              {expanded ? (
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color={colors.dark}
                />
              ) : (
                <Ionicons
                  name="chevron-down-outline"
                  size={24}
                  color={colors.dark}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <Collapsible duration={200} collapsed={expanded} align="center">
          <View>
            <View style={[styles.box_content_item, styles.line_top]}>
              <View style={styles.box_left_dropdown}>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Mã môn:{' '}
                  </Text>
                  <Text color={colors.text} size={14}>
                    {table.subject_code}
                  </Text>
                </Text>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Mã chuyển đổi:{' '}
                  </Text>
                  <Text color={colors.text} size={14}>
                    {table.subject_code}
                  </Text>
                </Text>
                <Text>
                  <Text color={colors.text} style={styles.text_note_content}>
                    Số tín chỉ:{' '}
                  </Text>
                  <Text color={colors.text} size={14}>
                    {table.slot}
                  </Text>
                </Text>
              </View>
              <View style={styles.box_right_dropdown}>
                <Text>
                  <Text color={colors.text} size={14}>
                    Trạng thái:{' '}
                  </Text>
                  <Text
                    color={colors.text}
                    size={14}
                    style={
                      table.subject_state === 'Passed'
                        ? {color: colors.green}
                        : table.subject_state === 'Not passed'
                        ? {color: colors.red}
                        : {color: colors.yellow}
                    }>
                    {table.subject_state}
                  </Text>
                </Text>
                <Text>
                  <Text color={colors.text} size={14}>
                    Điểm:{' '}
                  </Text>
                  <Text color={colors.text}>{table.average}</Text>
                </Text>
              </View>
            </View>
          </View>
        </Collapsible>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  box_content_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  line_top: {
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  box_left_title: {
    padding: 10,
    flex: 1,
  },
  text_bottom: {
    fontSize: 14,
    maxWidth: '85%',
    left: -5,
  },
  box_right_dropdown: {
    marginLeft: 30,
    marginBottom: 10,
  },
  text_note_content: {
    color: '#333',
    fontSize: 14,
  },
  box_left_dropdown: {
    marginTop: 10,
  },
  viewIcon: {
    position: 'absolute',
    right: 0,
    marginRight: -10,
  },
  clock: {
    position: 'absolute',
    left: -8,
    top: -8,
  },
});

export default ItemPointTable;
