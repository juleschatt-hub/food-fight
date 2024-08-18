
import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchUserList() {
    try {
      const response = yield axios.get('/api/user/users');
      console.log('response.data', response.data);
      yield put({ type: 'GET_USERS', payload: response.data });
    }
    catch(error) {
      console.log('Error fetching users:', error);
    }
  }

  function* allUsersSaga () {
    yield takeEvery('FETCH_USER_LIST', fetchUserList);
  }

  export default allUsersSaga;

  