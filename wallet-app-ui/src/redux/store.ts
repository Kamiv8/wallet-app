import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';
import authSlice from './slices/auth.slice';
import modalSlice from './slices/modal.slice';
import homePageSlice from './slices/pages/homePage.slice';
import historyDetailsSlice from './slices/pages/historyDetails.slice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
    homePage: homePageSlice.reducer,
    historyDetailsPage: historyDetailsSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
