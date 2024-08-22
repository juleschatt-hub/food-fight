import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchUserFights() {
    try {
      const response = yield axios.get('/api/places/userfights');
      console.log('response.data', response.data);
      yield put({ type: 'GET_FIGHTS', payload: response.data });
    }
    catch(error) {
      console.log('Error fetching fights:', error);
    }
  }

  function* userFightsSaga () {
    yield takeEvery('FETCH_USER_FIGHTS', fetchUserFights);
  }

  export default userFightsSaga;