import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MAIN_API} from './endpoint';

export const timereadAPI = createApi({
  reducerPath: 'timereadAPI',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: MAIN_API,
  }),
  endpoints: builder => ({
    createTimeRead: builder.mutation<any,{ time: number , token: string }>
    ({
      query: body => {
        return {
          url: 'accounts/changeReadTimeBook',
          method: 'POST',
          body: body.time,
          headers: { Authorization: `Bearer ${body.token}` },
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },

      invalidatesTags: ['Post'],
    }),
  }),
});

export const {useCreateTimeReadMutation} = timereadAPI;
