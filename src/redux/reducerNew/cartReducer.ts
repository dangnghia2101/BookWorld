import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CartState = {
  _id: string;
  name: string;
  isPrice: number;
  image: string;
  chapter?: Array<ChapterState>;
};

type ChapterState = {
  _id: string;
  name: string;
  isPrice: number;
};

export type CartList = {
  cartList: Array<CartState>;
};

const defaultCartState: CartList = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultCartState,
  reducers: {
    saveCartReducer: (state: CartList, action: PayloadAction<CartState>) => {
      // console.log('>>>>>> acton', action);
      state.cartList = [...state.cartList,action.payload];
      console.log('>>>>>> state', state);
      return state;
    },
    saveChapterReducer: (
      state: CartList,
      action: PayloadAction<{data: ChapterState; index: number}>,
    ) => {
      state.cartList[action.payload.index].chapter = [
        ...state.cartList[action.payload.index].chapter,
        action.payload.data,
      ];
      return state;
    },
  },
});
export const {saveCartReducer, saveChapterReducer} = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
