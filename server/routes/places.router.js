const express = require('express');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

require('dotenv').config();

const router = express.Router();



//Places API
const PLACES_API_KEY = process.env.PLACES_API_KEY;

// router.get('/placesget', rejectUnauthenticated, async (req, res) => {
//     try {
//       // Make a request to the Google Places API
//       const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
//         params: {
//             location: '44.9778,-93.2650',
//             radius: 50000,
//             type: 'restaurant',
//             key: PLACES_API_KEY
//         },
//       });

//     //sorts api call results in a random order
//     const restaurants = response.data.results.sort(() => .5 - Math.random());
    
//     //after results have been radomized this takes 
//     //the first ten results from the response
//     const randomRestaurants = restaurants.slice(0, 10);
//     console.log('array size', randomRestaurants.length);
//     console.log(randomRestaurants);

//     //isolating photo reference
//     randomRestaurants.map(i => {
//         let photoReference = i.photos[0].photo_reference;
//         let maxHeight = i.photos[0].height;
//         console.log('photo reference', photoReference);
//         console.log('height', maxHeight);
//     })
    

//       // Return the API response to the client
//       res.send(randomRestaurants);
//     } catch (error) {
//       console.error('Error fetching data from Google Places API:', error);
//       res.status(500).json({ error: 'Error fetching data from Google Places API' });
//     }
//   });

  router.get('/:id', rejectUnauthenticated, (req, res) => {
    const fightId = req.params.id;
    console.log('fightid from GET route', fightId);
    const sqlText = `SELECT * 
                      FROM "fights" 
                      JOIN "restaurants" ON fights.id = restaurants.fight_id
                      WHERE fights.id = $1;`;
    pool.query(sqlText, [fightId])
    .then((result) => {
        console.log('result.rows of fight get', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
  }) //END FIGHT GET



  //POST 10 random restaurants to DB
  router.post('/restaurants', rejectUnauthenticated, async (req, res) => {
    const connection = await pool.connect();
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
        console.log('req.body', req.body);
        
        const dinerId = req.user.id;
        const guestId = req.body.guestId;
        const dinnerDate = '10-10-2024';
        const restaurantMatchId = null;
        const fightQueryText = `INSERT INTO fights (diner_id, guest_id, dinner_date, restaurant_match_id)
                                VALUES ($1, $2, $3, $4) RETURNING id`
        await connection.query('BEGIN;');
        const result = await connection.query(fightQueryText, [dinerId, guestId, dinnerDate, restaurantMatchId]);
        const fightId = result.rows[0].id;
        console.log('fightid from POST route', fightId);

        //sorts api call results in a random order
        const restaurants = response.data.results.sort(() => .5 - Math.random());

        //after results have been radomized this limits 
        //the number of results that post to DB to 10
        const randomRestaurants = restaurants.slice(0, 10);

        //maps over randomrestaurants array and posts each restaurant to the restaurants table
        await randomRestaurants.map( restaurant => {
        const photoReference = restaurant.photos[0].photo_reference;
        const restaurantName = restaurant.name;
        const placeId = restaurant.place_id;
        const rating = restaurant.rating;
        const priceLevel = restaurant.price_level;
        const dinerLike = false;
        const guestLike = false;
        const maxHeight = 500;
        const maxWidth = 400;

        const queryText = `INSERT INTO "restaurants" (fight_id, restaurant_name, place_id, photo_reference, rating, price_level, diner_like, guest_like, max_height, max_width)
                           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
         connection.query(queryText, [fightId, restaurantName, placeId, photoReference, rating, priceLevel, dinerLike, guestLike, maxHeight, maxWidth]); 
       
        
    });
        await connection.query('COMMIT;');
        res.send({fightId});

    }
    catch(error) {
        await connection.query('ROLLBACK;');
        console.error('Transaction error posting to fights and restaurants ', error);
        res.sendStatus(500);
    }
    finally {
        connection.release();
    }

  }) //END /RESTAURANTS POST




module.exports = router;