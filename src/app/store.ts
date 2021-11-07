import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsListReducer from '../features/PostsList/postsListSlice';

export const store = configureStore({
  reducer: {
    posts: postsListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
