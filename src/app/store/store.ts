import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from '@app/store/root-reducer';
import { productsApi } from '@pages/Products/reducer/products-reducer';
import { userApi } from '@pages/AuthPage/reducer/user-reducer';

const middleware = [logger, productsApi.middleware, userApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
