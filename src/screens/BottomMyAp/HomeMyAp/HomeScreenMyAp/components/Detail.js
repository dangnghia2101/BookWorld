import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {Block} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import RenderHtml from 'react-native-render-html';
import actions from '@redux/actions';
import {theme} from '@theme';
import {SHOW} from '@redux/actions/HandlerLoading';
import HeaderWithButton from '@components/HeaderWithButton';
const Detail = props => {
  const {colors} = theme;
  const {
    route: {
      params: {content},
    },
  } = props;
  const getDetailPost = useSelector(state => state.getDetailPost);
  const dispatch = useDispatch();
  const getApiData = useCallback(() => {
    const id = content.id;
    dispatch({type: SHOW});
    dispatch({type: actions.DETAIL_POST, id});
  }, []);
  useEffect(() => {
    getApiData();
  }, [getApiData]);
  const source = {
    html: getDetailPost?.data?.html,
  };
  return (
    <Block flex>
      <HeaderWithButton title={'Phòng TC&QLĐT thông báo'} isBackHeader={true} />
      <ScrollView>
        <TouchableOpacity activeOpacity={1}>
          <Block backgroundColor={colors.white} margin={10} padding={12}>
            <Block>
              <Text style={styles.textBold}>{getDetailPost?.data?.title}</Text>
            </Block>
            <RenderHtml source={source} />
            <Block paddingBottom={70}>
              <Text style={styles.text}>
                Người đăng: {content.last_modifier}
              </Text>
              <Text style={styles.text}>Thời gian: {content.modified}</Text>
            </Block>
          </Block>
        </TouchableOpacity>
      </ScrollView>
    </Block>
  );
};

export default Detail;

const styles = StyleSheet.create({
  text: {
    color: '#888',
    fontSize: 12,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingBottom: 15,
  },
});
