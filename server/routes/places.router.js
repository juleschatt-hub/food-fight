const express = require('express');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

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
    console.log(randomRestaurants);

    //isolating photo reference
    randomRestaurants.map(i => {
        let photoReference = i.photos[0].photo_reference;
        console.log('photo reference', photoReference);
    })
    

      // Return the API response to the client
      res.send(randomRestaurants);
    } catch (error) {
      console.error('Error fetching data from Google Places API:', error);
      res.status(500).json({ error: 'Error fetching data from Google Places API' });
    }
  });

  //POST 10 random restaurants to DB
  router.post('/restaurants', async (req, res) => {
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


       randomRestaurants.map(restaurant => {
        const photoReference = restaurant.photos[0].photo_reference;
        const restaurantName = restaurant.name;
        const placeId = restaurant.place_id;
        const rating = restaurant.rating;
        const priceLevel = restaurant.price_level;
        const dinerLike = false;
        const guestLike = false;
        const fightId = 0;

        const queryText = `INSERT INTO "restaurants" (fight_id, restaurant_name, place_id, photo_reference, rating, price_level, diner_like, guest_like)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
        pool
        .query(queryText, [fightId, restaurantName, placeId, photoReference, rating, priceLevel, dinerLike, guestLike]) 
       
        
    });

res.sendStatus(201);

}
    catch(error) {
        console.error('error in restaurants post router', error);
        res.sendStatus(500);
    }

  })




module.exports = router;