import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FightModal from '../FightModal/FightModal';
import DiningCompanions from '../DiningCompanions/DiningCompanions';
import UserFights from '../UserFights/UserFights';
import UpcomingMeals from '../UpcomingMeals/UpcomingMeals';


function DashBoard() {
 
    //Checked out reducers
    const allUsers = useSelector((store) => store.all_users);
    const user = useSelector((store) => store.user);
    const fight = useSelector((store) => store.fightReducer);
    const userFights = useSelector((store) => store.userFightsReducer);

    //MODAL state
    const [modalIsOpen, setIsOpen] = useState(false);
  
    return (
<>
    <div className="container">
      <h2>Welcome, {user.first_name}!</h2>
    </div>
    <div>
      <DiningCompanions setIsOpen={setIsOpen} />
    </div>
   
    <div >
      <UserFights setIsOpen={setIsOpen} />
    </div>
    <div id="upcoming_meals">    
      <h1>Upcoming Meals:</h1>
      <div className="upcoming">
        <UpcomingMeals />
      </div>
    </div>
   
    <div id="fightModal">
      <FightModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
   
</>
    );   
  }
  
  export default DashBoard;
  