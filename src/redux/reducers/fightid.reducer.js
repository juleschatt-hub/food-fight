


const fightIdReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_FIGHT_ID':
            return action.payload;
        default:
            return state;
    }
}
export default fightIdReducer;