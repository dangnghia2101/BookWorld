import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MAIN_API } from './endpoint';

type AuthorState = {
    _id?: string;
    name?: string;
    email?: string;
    phone?: string;
    permission?: string;
    fcmtokens: Array<string>;
    image: string;
    bookmark: string;
    role: number;
    authorAcess: number;
    updatedAt: string;
    createdAt: string;
    wallet: number;
    notification: Array<string>;
    favoriteBooks: Array<String>;
    followBooks: Array<String>;
    historyBookRead: Array<String>;
    payBook: Array<String>;
};
export const authorAPI = createApi({
    reducerPath: 'authorAPI',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: MAIN_API,
    }),
    
    endpoints: builder => ({
        getAllAuthor: builder.query<AuthorState[], string>({
            query: () => ({
                url: `accounts/allAuthor`,
                // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
            }),
            transformResponse: (response: any) => response,
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const data = await queryFulfilled;
                } catch (err) {
                    console.log('error api getAllBook... ', err);
                }
            },
        }),
    }),
});

export const { useGetAllAuthorQuery } = authorAPI;
