import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';

function DiningCompanions() {
    const allUsers = useSelector((store) => store.all_users);
    const dispatch = useDispatch();


    useEffect(() => {      
        dispatch({type: 'FETCH_USER_LIST'});
        
     }, [])
     
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
 

     return(
        <>
            <h1>Dining Companions:</h1>
            {allUsers.map((guestUser) => 
            <form onSubmit={guestIdSubmit}>
                <table border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr key={guestUser.id}>
                            <td>{guestUser.first_name}</td>
                            <td style={{justify:"left"}}>
                                <button className='btn btn_sizeSm'
                                type='submit'
                                value={guestUser.id}
                                onClick={(evt) => setGuestId(evt.target.value)}>
                                Pick A Fight
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            )}      
        </>
     )

}
export default DiningCompanions;