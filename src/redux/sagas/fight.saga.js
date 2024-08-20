import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchFight() {
    try{
        const response = yield axios.get('/api/places');
        console.log('fight response.data', response.data);
        yield put({ type: 'SET_FIGHT', payload: response.data});
    }
    catch(error){
        console.log('Error fetching fight:', error);
        
    }
}

function* fightSaga() {
    yield takeEvery('FETCH_FIGHT', fetchFight);
}

export default fightSaga;