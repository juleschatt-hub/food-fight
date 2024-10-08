import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import all_users from './all_users.reducer';
import fightReducer from './fight.reducer';
import fightIdReducer from './fightid.reducer';
import userFightsReducer from './user_fights.reducer';
import upcomingMealsReducer from './upcoming_meals.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  all_users,
  fightReducer,
  fightIdReducer,
  userFightsReducer,
  upcomingMealsReducer
});

export default rootReducer;
