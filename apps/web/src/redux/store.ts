/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import { type User } from '@/models';
import { userReducer } from './slices';

export interface AppStore {
  user: User;
}

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { userReducer };
