
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
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



function FightModal({modalIsOpen, setIsOpen}) {
let subtitle;


function afterOpenModal() {
  // references are now sync'd and can be accessed.
 subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}
  const dispatch = useDispatch();
  const fight = useSelector((store) => store.fightReducer);
  const fightId = useSelector((store) => store.fightIdReducer);
  const user = useSelector((store) => store.user);
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
       
      dispatch({type: 'FETCH_FIGHT', payload: {fightId}});  
   }, [fightId])
   
   const updateDinerLike = (index) => {
  
    console.log('fight in updateDinerLike', fight);
    dispatch({type: 'UPDATE_DINER_LIKE', payload: fight[index].id});
    dispatch({type: 'UPDATE_RESTAURANT_MATCH_ID', payload: fight[index].id});
    dispatch({type: 'FETCH_FIGHT', payload: {fightId}});  
    if(fight[index].restaurant_match_id != null) {
      alert('you have matched on a restaurant');
    } 
   }

      
   const updateDinerDislike = (index) => {
      console.log(index);
    console.log('fight in updateDinerDisLike', fight);
    dispatch({type: 'UPDATE_DINER_DISLIKE', payload: fight[index].id});
    dispatch({type: 'UPDATE_RESTAURANT_MATCH_ID', payload: fight[index].id});
    dispatch({type: 'FETCH_FIGHT', payload: {fightId}}); 
  
   }

   
    return (
      
      <div>
        {/* <button className="btn" onClick={openModal}>View Fight</button> */}
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Fight Modal"
      >
          <div className='container'>
            <h1>Fight:</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>Restaurant Name</th>
                  {/* <th>Image</th> */}
                  <th>Diner Like</th>
                  <th>Guest Like</th>
                  <th>Like/Dislike</th>
                  
                </tr>
              </thead>
              <tbody>
                {fight.map((restaurant, index) => (
                  <tr key={restaurant.id}> 
                    <td>{restaurant.restaurant_name}</td>
                    <td>{restaurant.diner_like.toString()}</td>
                    <td>{restaurant.guest_like.toString()}</td>
                    {/* <td>
                      <img
                        src='https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt={restaurant.restaurant_name}
                        height="100px"
                      />
                    </td> */}
                    <td>
                      <button className='btn btn_sizeSm' onClick={() => updateDinerLike(index)}>Like</button>
                      <button className='btn btn_sizeSm' onClick={() => updateDinerDislike(index)}>Dislike</button>
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