import { call, put, takeEvery } from 'redux-saga/effects';
import { getFetchProducts, getProductsSuccess, getProductsFailure } from '@pages/Products/reducer/products-reducer';
import { fetchProducts } from '@shared/api';

function* startProductsFetch({ payload }: any) {
  try {
    const { data: products } = yield call(() => fetchProducts(payload.params));
    yield put(getProductsSuccess(products));
  } catch (err) {
    console.error(err);
    yield put(getProductsFailure());
  }
}

function* productsSaga() {
  yield takeEvery(getFetchProducts, startProductsFetch);
}

export default productsSaga;
