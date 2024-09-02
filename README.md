(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Food Fight

## Description

_Duration: 2 Week Sprint_

Not being able to agree on a restaurant to eat at with your friends and loved ones is a fairly universal occurance that weve all run into at some point. Food Fight aims to not on ly make that process easier, but more fun too! Food Fight is a desktop web application that allows two users to get in a "Food Fight" with eachother. One user purposes a fight with their friend that they would like to go to dinner with.  The application that reaches out to the google places API to generate a random list of nearby restaurants to be presented to each of the users. Each user then goes through the restaurants and decides which ones they want to go to for dinner.  Once each user "Likes" the same restaurant, a match is made and the fight has been resolved. This is now where the two friends will go to dinner for their upcoming meal and it will be listed in their set of upcoming meals.  
To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)



### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [Google Places Search Nearby Endpoint Documentation](https://developers.google.com/maps/documentation/places/web-service/search-nearby)
- [Axios](https://www.npmjs.com/package/axios)
- [pg](https://www.npmjs.com/package/pg)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [connect-pg-simnple](https://www.npmjs.com/package/connect-pg-simple)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-session](https://www.npmjs.com/package/express-session)
- [passport](https://www.npmjs.com/package/passport)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-modal](https://www.npmjs.com/package/react-modal)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [redux](https://www.npmjs.com/package/redux)
- [redux-logger](https://www.npmjs.com/package/redux-logger)
- [redux-sagas](https://www.npmjs.com/package/redux-saga)


## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `food_fight`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!
7. Create a .env file to store your session secret SERVER_SESSION_SECRET=YOUR_SECRET_KEY_HERE
8. You will also need an api key from google maps that will allow you to acess the google places api request that runs when a fight is created. Here is a [link](https://developers.google.com/maps/documentation/javascript/get-api-key) to get you started on obtaining your own API key. This will also need to be stored in the .env file. This key needs to be named like so, PLACES_API_KEY=YOUR_API_KEY

## Usage

1. Create an account by filling out the user registration form
2. Once the user logs in they will be brought to their dashboard which as a list of their "dining-companions" this is a list of people that you can "Pick a fight" with
3. After you click the pick a fight button with somone on the list, the fight will be created and a modal will pop-up with the and you will be entered into the game play of selecting which restaurants that you like
4. As the user who purposed the fight, you now just have to wait for the person you purposed the fight with to logon and make their selections.
5. Once they select like on a restaurant that you also liked, a match has been made and the game is concluded.
6. Both users will now see the selected restaurant in their Upcoming Meals portion of their Dashboard.

## Built With

### Server Side Technologies:
- Express (web server)
- Postgres (database server)
- Passport for user authentication
- Axios to request from the google places api
- Google Places API
- Postico for database management
- Node.js
- Node Package Manager

### Client Side Technologies:
- Vite (client side server)
-  Axios
- React
- React-modal
- Redux
- Redux Sagas
- React-dom

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. With a special thanks to Andrew Harasymiw my primary instructor at Prime, and to Chris Black Prime's part time cohort department lead. 

## Support
If you have suggestions or issues, please email me at [julian.james.chatterton@gmail.com](www.google.com)