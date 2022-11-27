import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type BookFavoriteState = {
  _id?: string;
  categoryId?: string;
  account?: string;
  releasedDate?: string;
  name?: string;
  image: string;
  introduction: string;
  overview: string;
  numSumRead: number;
  isPrice: number;
  imageAuthor: string;
};
export type BookListFavorite = {
    bookListFavorite: Array<BookFavoriteState>;
  };
  
const defaultBookState: BookListFavorite = {
    bookListFavorite: [],
  };
  
  const bookSlice = createSlice({
    name: 'favoriteBook',
    initialState: defaultBookState,
    reducers: {
      saveFavoriteBookReducer: (
        state: BookListFavorite,
        action: PayloadAction<BookFavoriteState>,
      ) => {
        console.log(action.payload);
        state.bookListFavorite = [...state.bookListFavorite, action.payload];
        return state;
      },
    },
  });
  
  export const {saveFavoriteBookReducer} =
    bookSlice.actions;
  export const FavoriteBookReducer = bookSlice.reducer;