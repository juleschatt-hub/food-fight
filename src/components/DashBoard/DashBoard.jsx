import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';



function DashBoard() {
 
    //Checked out reducers
    const allUsers = useSelector((store) => store.all_users);
    const user = useSelector((store) => store.user);
    const fight = useSelector((store) => store.fightReducer);

    


    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {      
        dispatch({type: 'FETCH_USER_LIST'});
        
     }, [dispatch])

     useEffect(() => {
        
        dispatch({type: 'FETCH_FIGHT'});
        
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
    <div className='container' style={{float: "right"}}>
        <h1>Dining Companions:</h1>
            {allUsers.map((guestUser) => 
            <form onSubmit={guestIdSubmit}>
                <table border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr key={guestUser.id}>
                            <td>{guestUser.first_name}</td>
                            <td>{guestUser.last_name}</td>
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
     </div>
   

<div className='container'>
      <h1>Fight:</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Restaurant Name</th>
            <th>Image</th>
            <th>Like/Dislike</th>
          </tr>
        </thead>
        <tbody>
          {fight.map((restaurant) => (
            <tr key={restaurant.id}> 
              <td>{restaurant.restaurant_name}</td>
              <td>
                <img
                  src='https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt={restaurant.restaurant_name}
                  height="300px"
                />
              </td>
              <td>
                <button className='btn btn_sizeSm'>Like</button>
                <button className='btn btn_sizeSm'>Dislike</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>    
</>
    );   
  }
  
  export default DashBoard;
  