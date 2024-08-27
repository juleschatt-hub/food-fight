import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchUpcomingMeals(action) {
    try {
      const fightId = action.payload;
      const response = yield axios.get(`/api/places/meals/${fightId}`);
      console.log('response.data', response.data);
      yield put({ type: 'GET_UPCOMING_MEALS', payload: response.data });
    }
    catch(error) {
      console.log('Error fetching upcoming meals:', error);
    }
  }

  function* upcomingMealsSaga () {
    yield takeEvery('FETCH_UPCOMING_MEALS', fetchUpcomingMeals);
  }

  export default upcomingMealsSaga;