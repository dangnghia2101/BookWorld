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
    idChapter: string;
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
        removeItem: (state, action) => {
            let arr = state.cartList.filter(
                arrow => arrow._id === action.payload,
            );
            state.cartList = arr;
        },
        removeBookCart: (state: CartList, action) => {
            let { id, index } = action.payload;
            state.cartList = state.cartList.splice(
                state.cartList.findIndex(arrow => arrow._id === id),
                index,
            );
        },
        // removeChapter: (state: CartList, action) => {
        //     let arr = state.cartList.filter(item => item.chapter[].idChapter === action.payload);
        //     state.cartList = arr;

            // let { id, index, keyChapter } = action.payload;
            // let arr = state.cartList[index];
            // delete arr.chapter[keyChapter];
            // state.cartList[index] = arr;
        // },
        removeBookPayment: (state: CartList, action) => {
            const data = action.payload;
            let newCart: CartState[] = [];

            state.cartList.forEach(item => {
                let flag = false;
                for (const _id of data) {
                    if (item._id === _id) {
                        flag = true;
                        return;
                    }
                }
                if (!flag) {
                    newCart.push(item);
                }
            });

            state.cartList = newCart;
        },
    },
});
export const {
    saveCartReducer,
    saveChapterReducer,
    saveStatusCartReducer,
    removeItem: removeItem,
    removeChapter,
    removeBookCart,
    removeBookPayment,
} = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
