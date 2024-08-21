import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchFightId(action) {
    try{
        const fightId = action.payload;
        const response = yield axios.get(`/api/places/${fightId}`);
        console.log('fightId response.data', response.data);
        yield put({ type: 'GET_FIGHT_ID', payload: fightId});
    }
    catch(error){
        console.log('Error fetching fight:', error);
        
    }
}

function* fightIdSaga() {
    yield takeEvery('FETCH_FIGHT_ID', fetchFightId);
}

export default fightIdSaga;