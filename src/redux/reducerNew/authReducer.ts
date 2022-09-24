import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AuthState = {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  permission?: string;
  fcmtokens: Array<string>;
  passwordUser?: string;
  token: string;
  image: string;
  bookmark: string;
  wallet: number;
  isLogin: boolean;
};

const defaultAuthState: AuthState = {
  _id: '',
  name: 'No name',
  email: 'No email',
  phone: 'No phone',
  permission: 'user',
  fcmtokens: [],
  passwordUser: '',
  token: '',
  image: '',
  bookmark: '',
  wallet: 0,
  isLogin: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultAuthState,
  reducers: {
    loginReducer: (state: AuthState, action: PayloadAction<AuthState>) => {
      state = {...action.payload, isLogin: true};
      return state;
    },
    logoutReducer: (state: AuthState) => {
      state = defaultAuthState;
      return state;
    },
  },
});

export const {loginReducer, logoutReducer} = authSlice.actions;
export const AuthReducer = authSlice.reducer;
