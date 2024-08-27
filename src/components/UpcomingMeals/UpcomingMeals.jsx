import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';



function UpcomingMeals() {
    const upcomingMeals = useSelector((store) => store.upcomingMealsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'FETCH_UPCOMING_MEALS'});
    }, [])
}

export default UpcomingMeals;