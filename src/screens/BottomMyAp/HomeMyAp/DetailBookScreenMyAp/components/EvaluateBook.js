import {Image, StyleSheet, TextInput, Dimensions} from 'react-native';
import {Block, Text, Button} from '@components';
import React, {useState} from 'react';
import {theme} from '@theme';
import {icons} from '@assets';
import ItemComment from './ItemComment';
import * as Progress from 'react-native-progress';
import Icon from '@components/Icon';

const listComment = [
  {
    Image:
      'https://cafebiz.cafebizcdn.vn/162123310254002176/2021/7/7/photo-1-162564020223387683391.jpg',
    UserName: 'Nguyễn Văn A',
    Content: 'Đọc rất hay, cảm ơn bạn',
    Evaluate: 4,
    Time: '20/10/2020',
  },
  {
    Image:
      'https://cafebiz.cafebizcdn.vn/162123310254002176/2021/7/7/photo-1-162564020223387683391.jpg',
    UserName: 'Nguyễn Văn A',
    Content: 'Đọc rất hay, cảm ơn bạn',
    Evaluate: 4,
    Time: '20/10/2020',
  },
];

const _renderStar = num => {
  let star = [];
  for (let i = 0; i < num; i++) {
    star.push(
      <Icon
        component={'AntDesign'}
        name="star"
        color={theme.colors.yellow}
        size={20}
      />,
    );
  }
  return star;
};

const EvaluateBook = ({}) => {
  const [evaluate, setEvaluate] = useState(0);
  const [comment, setComment] = useState('');
  return (
    <Block marginHorizontal={10} marginTop={40}>
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
      <Text center color={theme.colors.black} size={18} marginTop={30}>
        Đánh giá sách
      </Text>
      <Text center color={theme.colors.dark} size={14}>
        Hãy cho người khác biết suy nghĩ của bạn
      </Text>
      {/* Star cua người đánh giá */}
      <Block row justifyCenter>
        <Button style={styles.btn_star} onPress={() => setEvaluate(0)}>
          <Image
            source={evaluate >= 1 ? icons.star_happy : icons.star_sad}
            style={styles.start}
          />
        </Button>
        <Button style={styles.btn_star} onPress={() => setEvaluate(2)}>
          <Image
            source={evaluate >= 2 ? icons.star_happy : icons.star_sad}
            style={styles.start}
          />
        </Button>
        <Button style={styles.btn_star} onPress={() => setEvaluate(3)}>
          <Image
            source={evaluate >= 3 ? icons.star_happy : icons.star_sad}
            style={styles.start}
          />
        </Button>
        <Button style={styles.btn_star} onPress={() => setEvaluate(4)}>
          <Image
            source={evaluate >= 4 ? icons.star_happy : icons.star_sad}
            style={styles.start}
          />
        </Button>
        <Button style={styles.btn_star} onPress={() => setEvaluate(5)}>
          <Image
            source={evaluate >= 5 ? icons.star_happy : icons.star_sad}
            style={styles.start}
          />
        </Button>
      </Block>
      <TextInput
        value={comment}
        onChangeText={setComment}
        placeholder="Nhập vào đây"
        style={styles.tip_comment}
        multiline={true}
        maxLength={400}
        textAlignVertical="top"
      />

      <Block width={'100%'} alignCenter marginTop={20}>
        <Button style={styles.btn_submit_comment}>
          <Text center color={theme.colors.gray3} size={16}>
            {' '}
            Đăng bình luận{' '}
          </Text>
        </Button>
      </Block>

      {/* List comment */}
      {listComment?.map((item, index) => (
        <ItemComment key={index} item={item} />
      ))}
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
});

export default EvaluateBook;
