import { all } from 'redux-saga/effects';
import productsSaga from '@pages/Products/reducer/products-saga';
import productCardSaga from '@pages/ProductCard/reducer/product-card-saga';
import filterSaga from '@pages/Products/components/ProductsFilter/reducer/filter-saga';

function* watchAllSagas() {
  yield all([productsSaga(), filterSaga(), productCardSaga()]);
}

export default watchAllSagas;
