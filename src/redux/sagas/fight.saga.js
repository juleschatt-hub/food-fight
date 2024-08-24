import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchFight(action) {
    try {
        const fightId = action.payload.fightId;
        const response = yield axios.get(`/api/places/${fightId}`);
        yield put({ type: 'SET_FIGHT', payload: response.data});
    }
    catch(error){
        console.log('Error fetching fight:', error);
        
    }
}

function* updateDinerLike(action) {
    try {
        const restaurantId = action.payload.id;
        console.log('restaurantid', restaurantId);
        const response = yield axios.put(`/api/places/like/${restaurantId}`);
        console.log('updateDinerLike response', response);
        yield put({type: 'SET_DINER_LIKE', payload: restaurantId});
    }
    catch(error) {
        console.log('Error updating diner like', error);
    }
}

function* fightSaga() {
    yield takeEvery('FETCH_FIGHT', fetchFight);
    yield takeEvery('UPDATE_DINER_LIKE', updateDinerLike);
}

export default fightSaga;