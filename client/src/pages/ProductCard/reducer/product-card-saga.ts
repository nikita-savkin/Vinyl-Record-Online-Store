import { call, put, takeEvery } from 'redux-saga/effects';
import { getFetchProduct, getProductFailure, getProductSuccess } from '@pages/ProductCard/reducer/product-card-reducer';
import { fetchProductById } from '@shared/api';

function* startProductFetch({ payload }: any) {
  try {
    const { data: product } = yield call(() => fetchProductById(payload));
    yield put(getProductSuccess(product));
  } catch (err) {
    console.error(err);
    yield put(getProductFailure());
  }
}

function* productCardSaga() {
  yield takeEvery(getFetchProduct, startProductFetch);
}

export default productCardSaga;
