import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import FightModal from '../FightModal/FightModal';



function UserFights() {
    const userFights = useSelector((store) => store.userFightsReducer);
    const allUsers = useSelector((store) => store.all_users);
    const user = useSelector((store) => store.user);
    const fightId = useSelector((store) => store.fightIdReducer);
    
    console.log('userfights', userFights);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'FETCH_USER_FIGHTS'});
    }, [])

    // useEffect(() => {
       
    //     dispatch({type: 'FETCH_FIGHT', payload: {fightId}});  
    //  }, [fightId]) 

     function getFight() {   
        dispatch({type: 'FETCH_FIGHT', payload: {fightId}});
        
     }
    return(
        <>
        <h1>{user.first_name}'s Fights:</h1>
            {userFights.map((fight) =>
                <ul>
                    <li>{fight.diner_name}</li>
                    <li>{fight.guest_name}</li>
                    <li>{fight.id}</li>
                    <button 
                    className="btn btn_sizeSm" 
                    value={fight.id}
                    onClick={getFight} >
                    View Fight</button>
                    <hr />
                </ul>
            )}
        </>
    )

}

export default UserFights;