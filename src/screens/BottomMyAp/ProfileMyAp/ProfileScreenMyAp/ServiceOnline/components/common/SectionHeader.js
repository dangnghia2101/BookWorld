import React, {memo} from 'react';
import {Block, Text} from '@components';
import {theme} from '@theme';

const SectionHeader = ({date}) => {
  return (
    <Block padding={15} flex backgroundColor={theme.colors.white}>
      <Text paddingLeft={15} color={theme.colors.red}>
        Thời gian đăng ký: {date.timeAfter} to {date.timeBefore}
      </Text>
      <Text paddingLeft={15} paddingTop={5} color={theme.colors.red}>
        Các đơn đăng ký từ {date.time} sẽ được trừ tự động nếu có số dư trong ví
      </Text>
    </Block>
  );
};
export default memo(SectionHeader);
