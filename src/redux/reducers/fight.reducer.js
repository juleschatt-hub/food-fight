

const fightReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FIGHT':
            return action.payload;
        case 'SET_DINER_LIKE':
            return state
        case 'SET_DINER_DISLIKE':
            return state
        case 'SET_RESTAURANT_MATCH_ID':
            return state
        default:
            return [...state];
    }
}

export default fightReducer;