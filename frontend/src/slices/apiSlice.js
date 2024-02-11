// this is the parent slice using redux through which we fetch data from db instead of using useEffect hook
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
// fetchBaseQuery allows to make request to backend api
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
}); //here we dont specify endpoints