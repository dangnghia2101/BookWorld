import { loginReducer } from '@redux/reducerNew';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Token } from '@stripe/stripe-react-native';

import { MAIN_API } from './endpoint';

export const userApi = createApi({
    reducerPath: 'userAPI',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: MAIN_API }),
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
                url: '/auth/login',
                method: 'POST',
                body: body,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const saveData = {
                        ...data?.data?.account,
                        token: data?.data?.token,
                    };
                    dispatch(loginReducer(saveData));
                } catch (err) {
                    console.log('error api login... ', err);
                }
            },
            invalidatesTags: ['Post'],
        }),
        loginPhoneNumber: builder.mutation({
            query: body => ({
                url: '/accounts/loginNumberPhone',
                method: 'POST',
                body: body,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const saveData = {
                        ...data?.data?.account,
                        token: data?.data?.token,
                    };
                    dispatch(loginReducer(saveData));
                } catch (err) {
                    console.log('error api login... ', err);
                }
            },
            invalidatesTags: ['Post'],
        }),
        loginPhone: builder.mutation({
            query: body => ({
                url: '/accounts/registerNumberPhone',
                method: 'POST',
                body: body,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const saveData = {
                        ...data?.data?.account,
                        token: data?.data?.token,
                    };

                    console.log('==== login phone API ', data);
                    // dispatch(loginReducer(saveData));
                } catch (err) {
                    console.log('error api loginPhone... ', err);
                }
            },
        }),
        getLogin: builder.query({
            query: () => '/auth/login',
            providesTags: ['Post'],
        }),
    }),
});

export const { useLoginMutation, useGetLoginQuery, useLoginPhoneMutation, useLoginPhoneNumberMutation } =
    userApi;
