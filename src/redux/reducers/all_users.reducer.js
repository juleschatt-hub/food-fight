const allUsersReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_USERS':
        return action.payload;
      default:
        return state;
    }
  }

 
  
  // user will be on the redux state at:
  // state.user
  export default allUsersReducer;
  