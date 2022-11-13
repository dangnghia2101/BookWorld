import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MAIN_API} from './endpoint';

  export const editProfileAPI = createApi({
    reducerPath: 'editProfileAPI',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
      baseUrl: MAIN_API,
    }),
    endpoints: builder => ({
      editProfile: builder.mutation({
        query: body => {
          // console.log("body--------------------",body.FormData);
          return {
            url: 'accounts/getChangeProfile',
            method: 'POST',
            body: body.formData,
            headers: {
               Accept: 'application/json', 'Content-Type': 'multipart/form-data',
               Authorization: `Bearer ${body.token}`
            },
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
              const data  = await queryFulfilled;
              console.log("data++++++++",data)
          } catch (err) {
              console.log('error api editProdile... ', err);
          }
      },
      }),
    }),
  });
  
export const {
    useEditProfileMutation
  } = editProfileAPI;
  
