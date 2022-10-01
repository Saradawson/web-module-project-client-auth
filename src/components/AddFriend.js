import React, { useState } from 'react';
import axiosWithAuth from '../util/axiosWithAuth';

const AddFriend = () => {
    const [friend, setFriend] = useState({
        friendName: '',
        friendEmail: ''
    })

    const handleChange = (evt) => {
        setFriend({...friend, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(friend);
        axiosWithAuth().post(`http://localhost:9000/api/friends`, {name: friend.friendName, email: friend.friendEmail})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
    <div className='AddFriend-container'>
      <h2>Add Friend</h2>
      <form className='AddFriendForm' onSubmit={handleSubmit}>
        Friend Name 
        <input 
          type='text'
          name='friendName'
          onChange={handleChange}
        />
        Friend Email
        <input 
          type='email'
          name='friendEmail'
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
    )
  }
  
  export default AddFriend;