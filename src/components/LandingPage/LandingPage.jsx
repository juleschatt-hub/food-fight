import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Find Out What\'s For Dinner');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };
  
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming there are 4 items
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
 

  return (
    <div className="">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_12">
          <div className="container rules-box">
            <h2>Here Are The Rules:</h2>
            <div className='slider'>
                <ul className='list' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  <li>Food Fight is about answering the question, 
                    "where do I want to go to dinner?" Not, "Do I like this restaurant"</li>
                  <li>You can "Pick A Fight" with someone you want to go to dinner with,
                    or they can "Pick A Fight" with you </li>
                  <li>You will then be shown restaurants in your area, and decide yes or no</li>
                  <li>When you and your dining companinon both say yes to the same restaurant, 
                    your date is set. All thats left is to have a good time, and eat good food with a good friend!</li>
                </ul>
              </div>
          </div>
       
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm  />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
