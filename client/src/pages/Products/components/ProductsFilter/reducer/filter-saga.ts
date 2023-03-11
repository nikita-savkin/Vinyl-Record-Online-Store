import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchFilterStructure } from '@shared/api';
import {
  getFilterStructure,
  setFilterStructureSuccess,
  setFilterStructureFailure,
} from '@pages/Products/components/ProductsFilter/reducer/filter-reducer';

function* startFiltersFetch() {
  try {
    const { data: filterStructure } = yield call(() => fetchFilterStructure());
    yield put(setFilterStructureSuccess(filterStructure));
  } catch (err) {
    console.error(err);
    yield put(setFilterStructureFailure());
  }
}

function* filterSaga() {
  yield takeEvery(getFilterStructure, startFiltersFetch);
}

export default filterSaga;
