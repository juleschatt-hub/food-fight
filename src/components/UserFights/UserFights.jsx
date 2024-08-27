import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UserFights.css';



function UserFights({setIsOpen}) {
    const userFights = useSelector((store) => store.userFightsReducer);
    // const allUsers = useSelector((store) => store.all_users);
    const user = useSelector((store) => store.user);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'FETCH_USER_FIGHTS'});
    }, [])



     const getFightId = (fightId) => (evt) =>  {
        //dispatch({type: 'FETCH_FIGHT', payload: {fightId}});
        dispatch({type: 'GET_FIGHT_ID', payload: {fightId: fightId}})
        setIsOpen(true);
     }

    return(
        
            <div>
                <h1>{user.first_name}'s Fights In Progress:</h1>
                    {userFights.map((fight) =>
                        <ul className='userPanel'>
                            <li>Diner: {fight.diner_name}</li>
                            <li>Guest: {fight.guest_name}</li>
                            <button 
                            className="btn btn_sizeSm" 
                            onClick={getFightId(fight.id)} >
                            View Fight</button>
                            <hr />
                        </ul>
                    )}
            </div>
        
    )

}

export default UserFights;