import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartState = {
    _id: string;
    name: string;
    isPrice: number;
    image: string;
    chapter?: {
        [key: number]: ChapterState;
    };
    status: boolean;
};

type ChapterState = {
    _id: string;
    title: string;
    price: number;
    chapterNumber: number;
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
        saveCartReducer: (
            state: CartList,
            action: PayloadAction<CartState>,
        ) => {
            state.cartList = [...state.cartList, action.payload];
            return state;
        },
        saveStatusCartReducer: (
            state: CartList,
            action: PayloadAction<{ index: number; status: boolean }>,
        ) => {
            state.cartList[action.payload.index].status = action.payload.status;
        },
        saveChapterReducer: (
            state: CartList,
            action: PayloadAction<{ data: ChapterState; index: number }>,
        ) => {
            state.cartList[action.payload.index].chapter[
                action.payload.data.chapterNumber || 0
            ] = action.payload.data;
        },
    },
});
export const { saveCartReducer, saveChapterReducer, saveStatusCartReducer } = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
