

const fightReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FIGHT':
            return action.payload;
        default:
            return [...state];
    }
}