import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {MAIN_API} from './endpoint';

export const userPhoneApi = createApi({
  reducerPath: 'userPhoneApi',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({baseUrl: MAIN_API}),
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/accounts/loginNumberPhone',
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
      }),
      invalidatesTags: ['Post'],
    }),
    getLogin: builder.query({
      query: () => '/accounts/loginNumberPhone',
      providesTags: ['Post'],
    }),
  }),
});

export const {useLoginMutation, useGetLoginQuery} = userPhoneApi;
