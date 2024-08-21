
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function FightModal() {
let subtitle;
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
 subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}
  const dispatch = useDispatch();
  const fight = useSelector((store) => store.fightReducer);
  const fightId = useSelector((store) => store.fightIdReducer)

  useEffect(() => {
        
      dispatch({type: 'FETCH_FIGHT'});
      
   }, [])  

   useEffect(() => {
        
    dispatch({type: 'FETCH_FIGHT_ID' });;
    
 }, [fightId]) 
   
    return (
      
      <div>
        <button className="btn" onClick={openModal}>Start Fight</button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
          </Modal>
      </div>
    );
  }


export default FightModal;