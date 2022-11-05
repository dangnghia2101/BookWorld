import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MAIN_API} from './endpoint';

type CommentState = {
    _id?: string;
    idChapter?: string;
    userName?:string;
    content?:string;
    image: string;
    time?: string;
  };

  export const commentAPI = createApi({
    reducerPath: 'commentAPI',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
      baseUrl: MAIN_API,
    }),
    endpoints: builder => ({
      getAllComment: builder.query<CommentState[], string>({
        query: (body) => ({
          url: `books/${body}/getCommentChapter`,
        // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        }),
        transformResponse: (response: any) => response,
        async onQueryStarted(id, {dispatch, queryFulfilled}) {
            try {
              const {data} = await queryFulfilled;// Save data in store, using reducer
            } catch (err) {
              console.log('error api getAllComment... ', err);
            }
          },
      }),

      postComment: builder.mutation({
        query: body => {
          return {
            url: 'comments/postComment',
            method: 'POST',
            body: body,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          };
        },
      }),
    }),
  });
  
export const {
    useGetAllCommentQuery,
    useLazyGetAllCommentQuery,
    usePostCommentMutation
  } = commentAPI;
  
