import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';


function UserFights() {
    const userFights = useSelector((store) => store.userFightsReducer);
    const allUsers = useSelector((store) => store.all_users);
    const user = useSelector((store) => store.user);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'FETCH_USER_FIGHTS'});
    }, [])


    return(
        <>
        <h1>{user.first_name}'s Fights:</h1>
            {userFights.map((fight) =>
                <ul>
                    <li>{fight.diner_name}</li>
                    <li>{fight.guest_name}</li>
                    <hr />
                </ul>
            )}
        </>
    )

}

export default UserFights;