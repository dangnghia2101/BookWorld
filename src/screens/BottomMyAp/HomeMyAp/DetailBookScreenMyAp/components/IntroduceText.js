import {StyleSheet, Dimensions} from 'react-native';
import {Block, Text, Button} from '@components';
import React from 'react';
import {theme} from '@theme';
import Icon from '@components/Icon';
import * as Progress from 'react-native-progress';

const _renderStar = num => {
  let star = [];
  for (let i = 0; i < num; i++) {
    star.push(
      <Icon
        component={'AntDesign'}
        name="star"
        color={theme.colors.yellow}
        size={25}
      />,
    );
  }
  return star;
};

const IntroduceText = ({item}) => {
  return (
    <Block marginHorizontal={10} marginTop={20}>
      <Block row alignCenter>
        <Button
          style={[
            styles.btnItemCate,
            {backgroundColor: theme.colors.lightRed},
          ]}>
          <Text center fontType="bold" color="white">
            Doc sach
          </Text>
        </Button>
        <Button
          style={[
            styles.btnItemCate,
            {backgroundColor: theme.colors.black, marginLeft: 10},
          ]}>
          <Text center fontType="bold" color="white">
            Sach nghe
          </Text>
        </Button>
      </Block>
      {/* Giới thiệu tác giả */}
      <Text
        marginTop={20}
        color={theme.colors.black}
        fontType={'bold'}
        size={20}>
        Giới thiệu về tác giả
      </Text>
      <Text color={theme.colors.lightGray} size={15}>
        J.D. Salinger was an American writer, best known for his 1951 novel The
        Catcher in the Rye. Before its publi cation, Salinger published several
        short stories in Story magazine
      </Text>
      {/* Tổng quan đánh giá */}
      <Text
        marginTop={10}
        fontType={'bold'}
        color={theme.colors.black}
        size={20}>
        Tổng quan
      </Text>
      <Text color={theme.colors.lightGray} size={15}>
        J.D. Salinger was an American writer, best known for his 1951 novel The
        Catcher in the Rye. Before its publi cation, Salinger published several
        short stories in Story magazine
      </Text>

      <Text center marginTop={30} color={theme.colors.black} size={18}>
        Xếp hạng đánh giá
      </Text>
      <Text
        center
        marginTop={20}
        fontType={'bold'}
        color={theme.colors.black}
        size={50}>
        4.3
      </Text>
      {/* Star */}
      <Block row alignCenter justifyCenter width={'100%'}>
        {_renderStar(4)}
      </Block>
      <Text center marginTop={10} color={theme.black}>
        1000
      </Text>
      {/* Danh gia progress */}
      <Block row marginLeft={40} alignCenter marginTop={20}>
        <Text color={theme.colors.lightGray} size={14}>
          5
        </Text>
        <Block marginLeft={10}>
          <Progress.Bar
            color={theme.colors.black}
            height={12}
            progress={0.8}
            width={Dimensions.get('window').width - 200}
          />
        </Block>
        <Text marginLeft={10} color={theme.colors.lightGray} size={14}>
          75%
        </Text>
      </Block>

      <Block row marginLeft={40} alignCenter marginTop={10}>
        <Text color={theme.colors.lightGray} size={14}>
          4
        </Text>
        <Block marginLeft={10}>
          <Progress.Bar
            color={theme.colors.black}
            height={12}
            progress={0.8}
            width={Dimensions.get('window').width - 200}
          />
        </Block>
        <Text marginLeft={10} color={theme.colors.lightGray} size={14}>
          4%
        </Text>
      </Block>
      <Block row marginLeft={40} alignCenter marginTop={10}>
        <Text color={theme.colors.lightGray} size={14}>
          3
        </Text>
        <Block marginLeft={10}>
          <Progress.Bar
            color={theme.colors.black}
            height={12}
            progress={0.8}
            width={Dimensions.get('window').width - 200}
          />
        </Block>
        <Text marginLeft={10} color={theme.colors.lightGray} size={14}>
          25%
        </Text>
      </Block>
      <Block row marginLeft={40} alignCenter marginTop={10}>
        <Text color={theme.colors.lightGray} size={14}>
          2
        </Text>
        <Block marginLeft={10}>
          <Progress.Bar
            color={theme.colors.black}
            height={12}
            progress={0.8}
            width={Dimensions.get('window').width - 200}
          />
        </Block>
        <Text marginLeft={10} color={theme.colors.lightGray} size={14}>
          15%
        </Text>
      </Block>
      <Block row marginLeft={40} alignCenter marginTop={10}>
        <Text color={theme.colors.lightGray} size={14}>
          1
        </Text>
        <Block marginLeft={10}>
          <Progress.Bar
            color={theme.colors.black}
            height={12}
            progress={0.8}
            width={Dimensions.get('window').width - 200}
          />
        </Block>
        <Text marginLeft={10} color={theme.colors.lightGray} size={14}>
          13%
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  start: {
    height: 35,
    width: 35,
  },
  btn_star: {
    marginLeft: 5,
  },
  tip_comment: {
    backgroundColor: theme.colors.gray4,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 160,
    fontSize: 16,
    paddingVertical: 15,
    marginTop: 20,
  },
  btn_submit_comment: {
    backgroundColor: theme.colors.dark1,
    borderRadius: 10,
    width: '70%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  btnItemCate: {
    borderRadius: 12,
    paddingHorizontal: 20,
    width: 160,
    height: 45,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default IntroduceText;
