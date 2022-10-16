import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {MAIN_API} from './endpoint';

export type ProfileState = {
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

export const profileAPI = createApi({
  reducerPath: 'profileAPI',
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: MAIN_API,
  }),
  endpoints: builder => ({
    getReadTimeBook: builder.query<ProfileState[], string>({
      query: actions => ({
        url: `accounts/${actions}/getReadTimeBook`,
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
      }),
    }),
  }),
});

export const {
  useGetAllBookQuery,
  useGetAllBookByCategoryQuery,
  useGetAllCategoryQuery,
  useGetAllChapterBookMutation,
} = profileAPI;