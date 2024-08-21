import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';
import FightModal from '../FightModal/FightModal';
import DiningCompanions from '../DiningCompanions/DiningCompanions';



function DashBoard() {
 
    //Checked out reducers
    const allUsers = useSelector((store) => store.all_users);
    const user = useSelector((store) => store.user);
    const fight = useSelector((store) => store.fightReducer);

    const dispatch = useDispatch();
    const history = useHistory();

    
   

 

    return (
<>
    <div className="container">
      

      <h2>Welcome, {user.first_name}!</h2>
      <LogOutButton className="btn" />
    </div>
    <div id="upcoming_meals">
      <h1>Upcoming Meals:</h1>
      <div className="upcoming">
        {/* EACH MATCHING RESTAURANT THATS DATE IS UPCOMING GOES HERE */}
      </div>
    </div>
    <div className='container' style={{float: "right"}}>
      <DiningCompanions />
    </div>
    <div id="fightModal">
      <FightModal />
    </div>
   
</>
    );   
  }
  
  export default DashBoard;
  