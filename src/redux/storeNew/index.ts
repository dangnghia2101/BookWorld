// import { pokemonApi } from '@redux-setup/api';
import {
  AuthReducer,
  ThemeReducer,
  BookReducer,
  AppSettingReducer,
  LoadingReducer,
} from '@redux/reducerNew';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userApi, bookAPI, paymentApi} from '@redux/servicesNew';
import {setupListeners} from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  auth: AuthReducer,
  themeApp: ThemeReducer,
  book: BookReducer,
  setting: AppSettingReducer,
  loading: LoadingReducer,
  // ...other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'roott',
  storage: AsyncStorage,
  timeout: 30000,
  whitelist: ['setting', 'themeApp', 'auth'],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
    [bookAPI.reducerPath]: bookAPI.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(bookAPI.middleware)
      .concat(paymentApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
