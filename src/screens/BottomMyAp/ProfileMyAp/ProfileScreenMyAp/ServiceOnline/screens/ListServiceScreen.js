import React from 'react';
import HeaderWithButton from '@components/HeaderWithButton';
import {Block, Button, Text} from '@components';
import IconView from '@components/Icon';
import {NameIconComponents} from '@components/Icon/config';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import {navigate} from '@navigation/RootNavigation';
const columns = [
  {
    title: 'Gia hạn học phí',
    route: routes.TUITION_SCREEN,
  },
  {
    title: 'Đăng ký thi lại',
    route: routes.RE_REGISTER_EXAM_SCREEN,
  },
  {
    title: 'Đăng ký học lại',
    route: routes.RE_REGISTER_STUDY_SCREEN,
  },
  {
    title: 'Đăng ký chuyển ngành',
    route: routes.REGISTER_CHANGE_MAJOR_SCREEN,
  },
  {
    title: 'Đăng ký bảo lưu',
    route: routes.REGISTER_REVERSE_SCREEN,
  },
  {
    title: 'Dịch vụ đã đăng ký',
    route: routes.REGISTERED_SERVICE_SCREEN,
  },
];
const ItemColumn = ({title, route}) => {
  return (
    <Button onPress={() => navigate(route, {title: title})}>
      <Block
        radius={4}
        marginBottom={4}
        row
        alignCenter
        paddingHorizontal={16}
        paddingVertical={12}
        borderBottomWidth={0.6}
        borderColor={'#E6E6E6'}
        justifyContent={'space-between'}>
        <Text size={18}>{title}</Text>
        <IconView
          size={16}
          color={theme.colors.gray2}
          component={NameIconComponents.MaterialIcons}
          name={'navigate-next'}
        />
      </Block>
    </Button>
  );
};
const ListServiceScreen = () => {
  return (
    <Block backgroundColor={theme.colors.white} flex>
      <HeaderWithButton title={'Dịch vụ trực tuyến'} isBackHeader={true} />
      {columns &&
        columns.map((item, index) => {
          return (
            <ItemColumn
              key={index}
              title={item.title}
              route={routes.BLANK_SCREEN + '_' + routes.LIST_SERVICE_SCREEN}
            />
          );
        })}
    </Block>
  );
};

export default ListServiceScreen;
