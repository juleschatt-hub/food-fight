import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';



function DashBoard() {
 
    const dispatch = useDispatch();
    const allUsers = useSelector((store) => store.all_users);
    const user = useSelector((store) => store.user);
    const history = useHistory();
    useEffect(() => {
        //dispatch({type: 'SET_FIGHT'});
        dispatch({type: 'FETCH_USER_LIST'});
     }, [dispatch])


    const [guestId, setGuestId] = useState(0);
   

    const guestIdSubmit = (evt) => {
        evt.preventDefault();

        axios.post('/api/places/restaurants', {guestId})
        .then((result) => {
            console.log('POST result:', result);
            setGuestId(0);
        })
        .catch((error) => {

        })
        
    }
  
    return (
        <>
         <div className="container">
      <h2>Welcome, {user.first_name}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
        <div>
        <h1>some stuff</h1>
    <ul>
        {allUsers.map((guestUser) => 
        <form onSubmit={guestIdSubmit}>
            <li className='container'>{guestUser.first_name}
                <button className='btn btn_sizeSm'
                type='submit'
                value={guestUser.id}
                onClick={(evt) => setGuestId(evt.target.value)}
                
                >Pick A Fight</button>
                {console.log(guestUser)}
            </li>
        </form>
            )}
            
     </ul>
     </div>
     </>
    );
    
  }
  
  export default DashBoard;
  