


const fightIdReducer = (state = 0, action) => {
    switch(action.type) {
        case 'GET_FIGHT_ID':
            return action.payload.fightId;
        default:
            return state;
    }
}
export default fightIdReducer;