import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MAIN_API } from './endpoint';
import { changeLoading, saveFavoriteBookReducer } from '@redux/reducerNew';
export type BookOfAuthState = {
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

export const bookOfAuthAPI = createApi({
    reducerPath: 'bookOfAuthAPI',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: MAIN_API,
    }),
    endpoints: builder => ({
        getBookOfAuthor: builder.query<BookOfAuthState[], string>({
            query: id => {
                console.log('getBookOfAuthor');
                return {
                    url: `books/${id}/getAllBookAuthor`,
                };
            },
            transformResponse: (response: any) => response,
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    dispatch(changeLoading('SHOW'));
                    const { data } = await queryFulfilled; // Save data in store, using reducer
                    dispatch(changeLoading('HIDE'));
                } catch (err) {
                    console.log('error api getAllBookAuthor... ', err);
                }
            },
        }),
        getFavoriteBook: builder.query<BookOfAuthState[], string>({
            query: id => ({
                url: `accounts/${id}/getFavoriteBooks`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('++++++++++++++++++++++++++++++', data);

                    dispatch(saveFavoriteBookReducer({ data: data.data })); // Save data in store, using reducer
                } catch (err) {
                    // console.log('error api getAllBook... ', err);
                }
            },
        }),
        getBookReaded: builder.query<BookOfAuthState[], string>({
            query: id => ({
                url: `accounts/${id}getReadingBooks`,
                validateStatus: (response, result) =>
                    response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
            }),
        }),
        postSaveFavoriteBooks: builder.mutation({
            query: body => {
                return {
                    url: 'accounts/postFavoriteBooks',
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-type': 'application/json; charset=utf-8',
                        Authorization: `Bearer ${body.token}`,
                    },
                };
            },
        }),
    }),
});

export const {
    useGetBookOfAuthorQuery,
    useLazyGetBookOfAuthorQuery,
    useGetBookReadedQuery,
    useGetFavoriteBookQuery,
    usePostSaveFavoriteBooksMutation,
} = bookOfAuthAPI;
