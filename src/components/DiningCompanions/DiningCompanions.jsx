import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';


function DiningCompanions({setIsOpen}) {
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
             dispatch({type: 'GET_FIGHT_ID', payload: {fightId: result.data.fightId}});
             setIsOpen(true);
             setGuestId(0);
         })
         .catch((error) => {
            console.log('error getting fightID', error)
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
                            <strong><td>{guestUser.first_name}:</td></strong>
                            <div>
                                <td style={{justify:"left"}}>
                                    <button className='btn btn_sizeSm'
                                    type='submit'
                                    value={guestUser.id}
                                    onClick={(evt) => setGuestId(evt.target.value)}>
                                    Pick A Fight
                                    </button>
                                </td>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </form>
            )}      
        </>
     )

}
export default DiningCompanions;