import { put, takeLatest, call } from 'redux-saga/effects';

import { ActionTypes } from '../ActionTypes';
import { testService } from '../../services/TestService';
import { TestActionSuccess } from '../Actions/TestAction';

export function* loadInitialData(data) {
  const result = yield call(testService, data.payload);
  yield put(TestActionSuccess(result));

}

export function* sagaInitialLoad() {
  yield takeLatest(ActionTypes.TEST_ACTION, loadInitialData);
}
