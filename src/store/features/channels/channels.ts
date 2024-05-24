import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EPGResponse, IChannelParams } from "../../../interfaces";

// https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=200

export const channelsApiSlice = createApi({
  reducerPath: "channels",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://mfwkweb-api.clarovideo.net/services/epg`,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  refetchOnReconnect: true,
  tagTypes: ["Channels"],
  endpoints(builder) {
    return {
      apgChannel: builder.query<EPGResponse, IChannelParams>({
        query: ({ ...params }) => ({
          url: "/channel",
          params: {
            ...params,
          },
        }),
      }),
    };
  },
});

export const { useApgChannelQuery, useLazyApgChannelQuery } = channelsApiSlice;
