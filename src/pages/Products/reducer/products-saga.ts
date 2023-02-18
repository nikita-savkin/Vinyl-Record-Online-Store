import { call, put, takeEvery } from 'redux-saga/effects';
import { getFetchProducts, getProductsSuccess, getProductsFailure } from '@pages/Products/reducer/products-reducer';
import { fetchProductsFromStorage } from '@shared/firebase/utils/products-utils';

function* startProductsFetch(value: any) {
  const directionType = value.payload.directionType;
  const prevLastVisibleId = value.payload.lastVisibleId;
  const prevFirstVisibleId = value.payload.firstVisibleId;

  try {
    const { products, firstVisibleId, lastVisibleId } = yield call(() =>
      fetchProductsFromStorage(directionType, prevFirstVisibleId, prevLastVisibleId),
    );
    yield put(getProductsSuccess({ products, firstVisibleId, lastVisibleId }));
  } catch (err) {
    console.error(err);
    yield put(getProductsFailure());
  }
}

function* productsSaga() {
  yield takeEvery(getFetchProducts, startProductsFetch);
}

export default productsSaga;
