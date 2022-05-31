export const routes = {
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  WELCOME_SCREEN: 'WELCOME_SCREEN',
  REGISTER_SCREEN: 'REGISTER_SCREEN',
  BOTTOM_TAB: 'BOTTOM_TAB',
  HOME_SCREEN: 'HOME_SCREEN',
  EVENT_SCREEN: 'EVENT_SCREEN',
  NOTIFICATION_SCREEN: 'NOTIFICATION_SCREEN',
  PROFILE_SCREEN: 'PRODUCT_SCREEN',
  MENU_DETAIL: 'MENU_DETAIL',

  //MyAp
  BOTTOM_TAB_MY_AP: 'BOTTOM_TAB_MY_AP',
  HOME_MY_AP: 'HOME_MY_AP',
  NOTIFICATION_SCREEN_MY_AP: 'NOTIFICATION_SCREEN_MY_AP',
  PROFILE_SCREEN_MY_AP: 'PROFILE_SCREEN_MY_AP',
  HOME_SCREEN_MY_AP: 'HOME_SCREEN_MY_AP',
  DETAIL_BOOK_MY_AP: 'DETAIL_BOOK_MY_AP',
  READING_MY_APP: 'READING_MY_APP',
  MORE_MY_APP: 'MORE_MY_APP',
  INFORM_MY_AP: 'INFORM_MY_AP',
};

export const APP_PREFIX = ['emotion://', 'https://emotion.com'];

export const PATH_SCREENS = {
  screens: {
    [routes.BOTTOM_TAB_MY_AP]: {
      initialRouteName: routes.HOME_MY_AP,
      screens: {
        [routes.HOME_SCREEN_MY_AP]: {
          screens: {
            [routes]: 'home',
          },
        },
        [routes.EVENT_MAIN]: {
          screens: {
            [routes.EVENT_SCREEN]: 'event',
          },
        },
        [routes.NOTIFICATION_MAIN]: {
          screens: {
            [routes.NOTIFICATION_SCREEN]: 'notification',
          },
        },
        [routes.PROFILE_MAIN]: {
          screens: {
            [routes.PROFILE_SCREEN]: 'profile',
          },
        },
      },
    },
    [routes.LOGIN_SCREEN]: 'login',
    [routes.EVENT_DETAIL]: {
      path: 'even_detail/:id/:idNoti',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};
