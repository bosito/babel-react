import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter-slice";
import { channelsApiSlice } from "./features/channels/channels";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [channelsApiSlice.reducerPath]: channelsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      channelsApiSlice.middleware
    );
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
