import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    saveBookReducer,
    changeLoading,
    saveTabCategoryReducer,
    saveCategoryReducer,
    AuthState,
} from '@redux/reducerNew';

import { chapterType } from '@redux/types/chapterType';

import { MAIN_API } from './endpoint';
import { RootState } from '@redux/storeNew';

export type BookState = {
    _id?: string;
    categoryId?: string;
    account?: Array<Object>;
    releasedDate?: string;
    name?: string;
    image: Array<string>;
    introduction: string;
    overview: string;
    numSumRead: number;
    isPrice: number;
    imageAuthor: string;
};

export const bookAPI = createApi({
    reducerPath: 'bookAPI',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: MAIN_API,
        // prepareHeaders: (headers, { getState }) => {
        //     const token = (getState() as RootState).auth.token;
        //     console.log('===> TOKEN ', token);

        //     // If we have a token set in state, let's assume that we should be passing it.
        //     if (token) {
        //         headers.set('authorization', `Bearer ${token}`);
        //     }

        //     return headers;
        // },
    }),
    endpoints: builder => ({
        getAllBook: builder.query<BookState[], string>({
            query: () => ({
                url: `books/getAllBook`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(saveBookReducer({ data: data.data })); // Save data in store, using reducer
                } catch (err) {
                    console.log('error api getAllBook... ', err);
                }
            },
        }),
        getAllBookByCategory: builder.query<BookState[], string>({
            query: actions => ({
                url: `books/${actions}/getBookByIdCategory`,
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(saveTabCategoryReducer({ data: data.data })); // Save data in store, using reducer
                } catch (err) {
                    console.log('error api getAllBookByCategory... ', err);
                }
            },
        }),
        getAllCategory: builder.query<BookState[], string>({
            query: () => ({
                url: `categories/getAllCategories`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(saveCategoryReducer({ data: data.data })); // Save data in store, using reducer
                } catch (err) {
                    console.log('error api getAllCategories... ', err);
                }
            },
        }),
        getAllChapterBook: builder.mutation<
            chapterType[],
            [{ id: string }, { token: string }]
        >({
            query: body => ({
                url: 'books/getChapterBook',
                method: 'POST',
                body: body[0],
                headers: { Authorization: `Bearer ${body[1].token}` },
            }),
            transformResponse: (response: { data: chapterType[] }) =>
                response.data,
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    dispatch(changeLoading('SHOW'));
                    const { data } = await queryFulfilled;
                    dispatch(changeLoading('HIDE')); // Save data in store, using reducer
                } catch (err) {
                    console.log('error api getAllCategories... ', err);
                }
            },
        }),
    }),
});

export const {
    useGetAllBookQuery,
    useGetAllBookByCategoryQuery,
    useGetAllCategoryQuery,
    useGetAllChapterBookMutation,
} = bookAPI;
