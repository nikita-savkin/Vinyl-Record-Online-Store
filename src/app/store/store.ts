import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '@app/store/root-reducer';
import { userApi } from '@pages/AuthPage/reducer/user-reducer';
import productsSaga from '@pages/Products/reducer/products-saga';

const defaultMiddleware = [userApi.middleware];
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...defaultMiddleware, sagaMiddleware],
});

sagaMiddleware.run(productsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
