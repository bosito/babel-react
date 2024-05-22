import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const channelsApiSlice = createApi({
  reducerPath: "channels",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_CART_MAPS}`,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  refetchOnReconnect: true,
  tagTypes: ["Channels"],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints(builder) {
    return {};
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = channelsApiSlice;
