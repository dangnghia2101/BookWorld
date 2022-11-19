import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './authReducer';

export type AuthorArrayState = {
    authors: AuthState[];
};

const defaultAuthorState: AuthorArrayState = {
    authors: [],
};

const authorSlice = createSlice({
    name: 'author',
    initialState: defaultAuthorState,
    reducers: {
        saveAuthor: (
            state: AuthorArrayState,
            action: PayloadAction<AuthState[]>,
        ) => {
            state.authors = action.payload;
            return state;
        },
    },
});

export const { saveAuthor } = authorSlice.actions;
export const AuthorReducer = authorSlice.reducer;
