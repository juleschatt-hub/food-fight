import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function LandingPage() {
 
    const dispatch = useDispatch();
    const allUsers = useSelector((store) => store.all_users);

    console.log('allusers', allUsers[0].id);

    useEffect(() => {
        dispatch({type: 'FETCH_USER_LIST'});
    }, [dispatch])
    

    const history = useHistory();
  
    return (
        <>
        <div>
        <h1>some stuff</h1>
    <ul>
        {allUsers.map((user) => <li>{user.first_name}</li>)}
     </ul>
     </div>
     </>
    );
    
  }
  
  export default LandingPage;
  