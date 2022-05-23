import {Image, StyleSheet, TextInput} from 'react-native';
import {Block, Text, Button} from '@components';
import React, {useState} from 'react';
import {theme} from '@theme';
import {icons} from '@assets';
import ItemComment from './ItemComment';

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

const EvaluateBook = ({item}) => {
  const [evaluate, setEvaluate] = useState(0);
  const [comment, setComment] = useState('');
  return (
    <Block marginHorizontal={10} marginTop={40}>
      <Text center color={theme.colors.black} size={18}>
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
