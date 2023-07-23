import { userReducer } from './slices';
import { type User } from '@/models';
import { configureStore } from '@reduxjs/toolkit';

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
