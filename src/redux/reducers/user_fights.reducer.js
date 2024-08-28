

const userFightsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_FIGHTS':
            return action.payload;
        default:
            return state;
    }
}

export default userFightsReducer;