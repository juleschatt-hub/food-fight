const express = require('express');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
//const userStrategy = require('../strategies/user.strategy');

require('dotenv').config();

const router = express.Router();



//Places API
const PLACES_API_KEY = process.env.PLACES_API_KEY;

router.get('/', rejectUnauthenticated, async (req, res) => {
    try {
      // Make a request to the Google Places API
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
            location: '44.9778,-93.2650',
            radius: 50000,
            type: 'restaurant',
            key: PLACES_API_KEY
        },
      });

    //sorts api call results in a random order
    const restaurants = response.data.results.sort(() => .5 - Math.random());
    
    //after results have been radomized this takes 
    //the first ten results from the response
    const randomRestaurants = restaurants.slice(0, 10);
    console.log('array size', randomRestaurants.length);

      // Return the API response to the client
      res.send(randomRestaurants);
    } catch (error) {
      // Handle any errors
      console.error('Error fetching data from Google Places API:', error);
      res.status(500).json({ error: 'Error fetching data from Google Places API' });
    }
  });




module.exports = router;