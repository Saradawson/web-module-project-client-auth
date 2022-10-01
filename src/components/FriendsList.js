import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../util/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      axiosWithAuth().get('http://localhost:9000/api/friends')
      .then(res => {
        console.log(res.data)
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      }) 
    }, [])


    return(
      <div className='friendsList-container'>
        <h2>FriendsList</h2>
          <ul>
            {friends.map((friend, idx) => {
              return <li key={idx}>
                {friend.name} - {friend.email} 
              </li>
            })}
          </ul>
      </div>
    )
  }

  export default FriendsList;