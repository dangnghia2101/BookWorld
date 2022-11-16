import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { string } from 'prop-types';

import { MAIN_API } from './endpoint';

export type RoomState = {
    _id: string;
    name: string;
    image: string;
    users: Array<string>;
    createdBy: string;
    createdAt: string;
};

export type ChatState = {
    _id: string;
    name: string;
    image: string;
    users: Array<string>;
    createdBy: string;
    createdAt: string;
};

type MessageState = {
    fromSelf: boolean;
    message: string;
    createdAt: string;
    name: string;
    avatar: string;
};

export const chatAPI = createApi({
    reducerPath: 'chatAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: MAIN_API,
    }),
    endpoints: builder => ({
        getRoomChat: builder.query<RoomState[], string>({
            query: token => {
                return {
                    url: 'rooms/get-rooms',
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token}` },
                };
            },
            transformResponse: (response: { data: ChatState[] }) =>
                response.data,
        }),
        getChats: builder.mutation<
            MessageState[],
            { token: string; room: string }
        >({
            query: body => {
                return {
                    url: 'messages/get-message',
                    method: 'POST',
                    headers: { Authorization: `Bearer ${body.token}` },
                    body: { room: body.room },
                };
            },
            transformResponse: (response: { data: MessageState[] }) =>
                response.data,
        }),
        sendMessage: builder.mutation<
            MessageState[],
            { token: string; room: string; message: string }
        >({
            query: body => {
                return {
                    url: 'messages/send-message',
                    method: 'POST',
                    headers: { Authorization: `Bearer ${body.token}` },
                    body: { message: body.message, room: body.room },
                };
            },
            transformResponse: (response: { data: MessageState[] }) =>
                response.data,
        }),
    }),
});

export const {
    useLazyGetRoomChatQuery,
    useGetRoomChatQuery,
    useGetChatsMutation,
    useSendMessageMutation,
} = chatAPI;
