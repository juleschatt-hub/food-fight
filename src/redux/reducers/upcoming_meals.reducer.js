const upcomingMealsReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_UPCOMING_MEALS':
        return action.payload;
      default:
        return state;
    }
  }

 
  
  
  export default upcomingMealsReducer;